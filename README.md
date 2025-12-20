# 🤸 Splits Training App

A web-based flexibility training app designed for ex-gymnasts working to regain splits and oversplits. Built with research-backed best practices for flexibility training.

## Features

- **Three Specialized Workouts**
  - Front Splits Focus (10 min)
  - Straddle/Middle Split Focus (10 min)
  - Oversplit Training (10 min, advanced)

- **Evidence-Based Training**
  - PNF (Proprioceptive Neuromuscular Facilitation) stretching techniques
  - Optimal hold times (30-60s for regular stretches, 10-30s for oversplits)
  - Contract-relax cycles for maximum flexibility gains
  - Safety warnings for oversplits

- **Smart Timer & Tracking**
  - Visual countdown timer with circular progress
  - Exercise-by-exercise guidance
  - Rep counting for PNF cycles
  - Session history tracking
  - Streak tracking to maintain consistency

- **Safety First**
  - Warm-up reminders before every session
  - Built-in safety warnings for advanced exercises
  - Proper hold times to prevent injury
  - Clear instructions for each exercise

## How to Use

### Using Locally
1. **Open the App**: Open `index.html` in your web browser
2. **Choose a Workout**: Select from Front Splits, Straddle, or Oversplit training
3. **Warm Up**: Complete 10 minutes of warm-up (jumping jacks, leg swings, etc.)
4. **Follow Along**: The app will guide you through each exercise with timers
5. **Track Progress**: View your stats and workout history on the home screen

### Deploy to GitHub Pages

This app is ready to deploy to GitHub Pages! Follow these steps:

1. Go to your repository settings on GitHub
2. Navigate to **Pages** (under "Code and automation")
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, select your main branch (e.g., `main` or `master`) and `/ (root)`
5. Click **Save**
6. Wait a few minutes for deployment
7. Your app will be available at: `https://<username>.github.io/<repository-name>/`

The app is fully static with no build process required, so it works perfectly with GitHub Pages out of the box!

## Workout Descriptions

### Front Splits Focus
Perfect for regaining front split flexibility. Includes hamstring stretches, hip flexor work, and PNF cycles for both legs.

### Straddle/Middle Split Focus
Targets inner thigh and straddle flexibility with progressive stretches and PNF techniques.

### Oversplit Training (Advanced)
⚠️ Only use this if you can already do full splits comfortably. Includes elevated stretches and oversplit work with strict safety protocols.

## Best Practices

Based on current flexibility research:

- **Train 3-4 times per week** for optimal results
- **Always warm up** for at least 10 minutes before stretching
- **Listen to your body**: Discomfort is OK, sharp pain is NOT
- **Be consistent**: The app tracks your streak to help you stay on track
- **Don't rush**: Flexibility takes time to develop safely

## Technical Details

- Pure HTML/CSS/JavaScript (no dependencies)
- Works offline after first load
- Stores progress in browser localStorage
- Responsive design for mobile and desktop
- Audio feedback when exercises complete

## Research Sources

This app is built on evidence-based flexibility training practices:

- PNF stretching provides 10-20% greater ROM than static stretching alone
- Hold times: 30-60s for regular stretches, max 30s for oversplits to prevent injury
- Contract-relax technique: Most effective PNF method for splits
- Frequency: 3-4 sessions per week for progressive gains

## Safety Notes

⚠️ **Important Safety Information:**
- Never stretch cold muscles - always warm up first
- Stop immediately if you feel sharp pain (discomfort is OK, pain is NOT)
- Oversplits can cause injury if attempted before achieving full splits
- Hold oversplits for maximum 30 seconds to prevent ligament damage
- If you have any injuries, consult a healthcare professional first

## Files

- `index.html` - Main app structure
- `styles.css` - All styling and animations
- `app.js` - App logic, timer, and data management
- `workouts.js` - Workout definitions and exercise data

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

---

**Disclaimer**: This app is for educational and training purposes. Always listen to your body and consult with a healthcare or fitness professional if you have any concerns about your flexibility training
