// App State
let currentWorkout = null;
let currentExerciseIndex = 0;
let currentRep = 1;
let isPaused = false;
let timer = null;
let timeRemaining = 0;
let currentPnfPhaseIndex = 0;
let workoutStartTime = null;

// Storage keys
const STORAGE_KEYS = {
    SESSIONS: 'stretchy_sessions',
    STATS: 'stretchy_stats'
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadStats();
    checkStreak();
});

// Navigation functions
function showHome() {
    hideAllScreens();
    document.getElementById('home-screen').classList.add('active');
    loadStats();
}

function showWarmup(workoutType) {
    currentWorkout = { type: workoutType, ...workouts[workoutType] };
    hideAllScreens();
    document.getElementById('warmup-screen').classList.add('active');
}

function showHistory() {
    hideAllScreens();
    document.getElementById('history-screen').classList.add('active');
    renderHistory();
}

function hideAllScreens() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
}

// Workout functions
function startWorkout(workoutType) {
    showWarmup(workoutType);
}

function confirmWarmup() {
    hideAllScreens();
    document.getElementById('workout-screen').classList.add('active');
    currentExerciseIndex = 0;
    workoutStartTime = Date.now();
    startExercise();
}

function startExercise() {
    if (currentExerciseIndex >= currentWorkout.exercises.length) {
        completeWorkout();
        return;
    }

    const exercise = currentWorkout.exercises[currentExerciseIndex];
    currentRep = 1;
    isPaused = false;

    // Update UI
    document.getElementById('workout-title').textContent = currentWorkout.name;
    document.getElementById('exercise-name').textContent = exercise.name;
    document.getElementById('exercise-description').textContent = exercise.description;

    // Show warning if exists
    if (exercise.warning) {
        const warningDiv = document.createElement('div');
        warningDiv.className = 'safety-note';
        warningDiv.textContent = exercise.warning;
        document.getElementById('exercise-description').appendChild(document.createElement('br'));
        document.getElementById('exercise-description').appendChild(warningDiv);
    }

    // Update progress
    const progress = ((currentExerciseIndex) / currentWorkout.exercises.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('exercise-counter').textContent =
        `Exercise ${currentExerciseIndex + 1} of ${currentWorkout.exercises.length}`;

    // Show/hide rep counter
    if (exercise.reps > 1) {
        document.getElementById('rep-counter').classList.remove('hidden');
        document.getElementById('current-rep').textContent = currentRep;
        document.getElementById('total-reps').textContent = exercise.reps;
    } else {
        document.getElementById('rep-counter').classList.add('hidden');
    }

    // Start the timer based on exercise type
    if (exercise.type === 'pnf') {
        startPnfCycle(exercise);
    } else {
        startRegularTimer(exercise);
    }
}

function startRegularTimer(exercise) {
    document.getElementById('pnf-instructions').classList.add('hidden');
    timeRemaining = exercise.duration;

    // Set appropriate label based on exercise type
    const labels = {
        'warmup': 'Get Moving!',
        'dynamic': 'Keep Moving',
        'static': 'Hold this stretch',
        'oversplit': 'Hold carefully'
    };
    document.getElementById('timer-label').textContent = labels[exercise.type] || 'Hold this stretch';

    updateTimerDisplay();

    timer = setInterval(() => {
        if (!isPaused) {
            timeRemaining--;
            updateTimerDisplay();

            // Countdown beeps for last 3 seconds
            if (timeRemaining > 0 && timeRemaining <= 3) {
                playSound('countdown');
            }

            if (timeRemaining <= 0) {
                clearInterval(timer);
                playSound('complete');
                nextExercise();
            }
        }
    }, 1000);
}

function startPnfCycle(exercise) {
    document.getElementById('pnf-instructions').classList.remove('hidden');
    currentPnfPhaseIndex = 0;
    runPnfPhase(exercise);
}

function runPnfPhase(exercise) {
    if (currentPnfPhaseIndex >= exercise.pnfPattern.length) {
        // Completed one full PNF cycle
        currentRep++;
        if (currentRep <= exercise.reps) {
            // Start next rep
            document.getElementById('current-rep').textContent = currentRep;
            currentPnfPhaseIndex = 0;
            setTimeout(() => runPnfPhase(exercise), 1000);
        } else {
            // All reps done, move to next exercise
            playSound('complete');
            nextExercise();
        }
        return;
    }

    const phase = exercise.pnfPattern[currentPnfPhaseIndex];
    timeRemaining = phase.duration;

    document.getElementById('pnf-phase').innerHTML = `<strong>${capitalizeFirst(phase.phase)}:</strong> ${phase.instruction}`;
    document.getElementById('timer-label').textContent = capitalizeFirst(phase.phase) + ' Phase';

    // Play sound cue for phase transition
    if (phase.phase === 'contract') {
        playSound('contract');
    } else if (phase.phase === 'relax') {
        playSound('relax');
    } else if (phase.phase === 'deepen') {
        playSound('deepen');
    }

    updateTimerDisplay();

    timer = setInterval(() => {
        if (!isPaused) {
            timeRemaining--;
            updateTimerDisplay();

            // Countdown beeps for last 3 seconds
            if (timeRemaining > 0 && timeRemaining <= 3) {
                playSound('countdown');
            }

            if (timeRemaining <= 0) {
                clearInterval(timer);
                currentPnfPhaseIndex++;
                runPnfPhase(exercise);
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer-text').textContent =
        `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Update circular progress
    const totalDuration = currentWorkout.exercises[currentExerciseIndex].type === 'pnf'
        ? currentWorkout.exercises[currentExerciseIndex].pnfPattern[currentPnfPhaseIndex].duration
        : currentWorkout.exercises[currentExerciseIndex].duration;

    const progress = (timeRemaining / totalDuration);
    const circumference = 283; // 2 * PI * 45
    const offset = circumference * (1 - progress);
    document.getElementById('timer-progress').style.strokeDashoffset = offset;
}

function nextExercise() {
    currentExerciseIndex++;
    clearInterval(timer);

    if (currentExerciseIndex < currentWorkout.exercises.length) {
        // Short break between exercises
        setTimeout(() => startExercise(), 2000);
    } else {
        completeWorkout();
    }
}

function skipExercise() {
    if (confirm('Skip this exercise?')) {
        clearInterval(timer);
        nextExercise();
    }
}

function pauseWorkout() {
    isPaused = !isPaused;
    const btn = event.target;
    btn.textContent = isPaused ? 'Resume' : 'Pause';
}

function quitWorkout() {
    if (confirm('Are you sure you want to quit this workout?')) {
        clearInterval(timer);
        showHome();
    }
}

function completeWorkout() {
    clearInterval(timer);

    // Play celebratory completion sound
    playSound('workout_complete');

    // Calculate workout duration
    const duration = Math.round((Date.now() - workoutStartTime) / 1000 / 60);

    // Save session
    saveSession({
        workoutType: currentWorkout.type,
        workoutName: currentWorkout.name,
        duration: duration,
        exercises: currentWorkout.exercises.length,
        date: new Date().toISOString()
    });

    // Update completion screen
    document.getElementById('completion-time').textContent = duration;
    document.getElementById('completion-exercises').textContent = currentWorkout.exercises.length;

    // Show completion screen
    hideAllScreens();
    document.getElementById('completion-screen').classList.add('active');
}

// Data persistence
function saveSession(session) {
    const sessions = getSessions();
    sessions.unshift(session);
    localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(sessions));

    // Update stats
    const stats = getStats();
    stats.totalSessions++;
    stats.totalMinutes += session.duration;
    stats.lastWorkoutDate = session.date;
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
}

function getSessions() {
    const data = localStorage.getItem(STORAGE_KEYS.SESSIONS);
    return data ? JSON.parse(data) : [];
}

function getStats() {
    const data = localStorage.getItem(STORAGE_KEYS.STATS);
    return data ? JSON.parse(data) : {
        totalSessions: 0,
        totalMinutes: 0,
        streak: 0,
        lastWorkoutDate: null
    };
}

function loadStats() {
    const stats = getStats();
    document.getElementById('total-sessions').textContent = stats.totalSessions;
    document.getElementById('total-time').textContent = stats.totalMinutes;
    document.getElementById('streak').textContent = stats.streak;
}

function checkStreak() {
    const stats = getStats();

    if (!stats.lastWorkoutDate) {
        stats.streak = 0;
        localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
        return;
    }

    const lastWorkout = new Date(stats.lastWorkoutDate);
    const today = new Date();
    const diffTime = Math.abs(today - lastWorkout);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 1) {
        // Streak broken
        stats.streak = 0;
        localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
    }
}

function renderHistory() {
    const sessions = getSessions();
    const historyList = document.getElementById('history-list');

    if (sessions.length === 0) {
        historyList.innerHTML = '<p class="empty-state">No sessions yet. Start your first workout!</p>';
        return;
    }

    historyList.innerHTML = sessions.map(session => {
        const date = new Date(session.date);
        return `
            <div class="history-item">
                <div class="history-item-header">
                    <span class="history-workout-name">${session.workoutName}</span>
                    <span class="history-date">${formatDate(date)}</span>
                </div>
                <div class="history-details">
                    ${session.duration} minutes • ${session.exercises} exercises
                </div>
            </div>
        `;
    }).join('');
}

// Utility functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(date) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
        return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
        return 'Yesterday';
    } else {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
}

// Enhanced sound system for workout cues
function playSound(type = 'complete') {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();

        const soundProfiles = {
            // Exercise complete - cheerful ascending tone
            'complete': {
                frequencies: [600, 800],
                duration: 0.15,
                gap: 0.05,
                volume: 0.3
            },
            // PNF Contract phase - strong, attention-grabbing
            'contract': {
                frequencies: [900],
                duration: 0.2,
                gap: 0,
                volume: 0.35,
                type: 'square'
            },
            // PNF Relax phase - gentle, calming
            'relax': {
                frequencies: [400],
                duration: 0.3,
                gap: 0,
                volume: 0.25
            },
            // PNF Deepen phase - encouraging mid-tone
            'deepen': {
                frequencies: [650],
                duration: 0.25,
                gap: 0,
                volume: 0.3
            },
            // Countdown beep - short and clear
            'countdown': {
                frequencies: [700],
                duration: 0.1,
                gap: 0,
                volume: 0.25
            },
            // Final countdown - more urgent
            'final': {
                frequencies: [900, 900],
                duration: 0.1,
                gap: 0.08,
                volume: 0.35
            },
            // Workout complete - celebratory
            'workout_complete': {
                frequencies: [500, 650, 800, 1000],
                duration: 0.15,
                gap: 0.05,
                volume: 0.3
            }
        };

        const profile = soundProfiles[type] || soundProfiles['complete'];
        let currentTime = audioContext.currentTime;

        profile.frequencies.forEach((freq, index) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = freq;
            oscillator.type = profile.type || 'sine';

            const startTime = currentTime + (index * (profile.duration + profile.gap));
            const endTime = startTime + profile.duration;

            gainNode.gain.setValueAtTime(profile.volume, startTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, endTime);

            oscillator.start(startTime);
            oscillator.stop(endTime);
        });
    } catch (e) {
        // Silent fail if audio not supported
    }
}

// Update streak when completing a workout
function updateStreak() {
    const stats = getStats();
    const lastWorkout = stats.lastWorkoutDate ? new Date(stats.lastWorkoutDate) : null;
    const today = new Date();

    if (!lastWorkout) {
        stats.streak = 1;
    } else {
        const diffTime = Math.abs(today - lastWorkout);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            stats.streak++;
        } else if (diffDays > 1) {
            stats.streak = 1;
        }
        // If same day, don't change streak
    }

    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
}

// Modify saveSession to update streak
const originalSaveSession = saveSession;
saveSession = function(session) {
    originalSaveSession(session);
    updateStreak();
    loadStats();
};
