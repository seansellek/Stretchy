// Workout definitions based on flexibility training best practices

const workouts = {
    beginner: {
        name: "Front Splits Focus",
        exercises: [
            {
                name: "Standing Hamstring Stretch",
                description: "Stand with feet hip-width apart. Fold forward, reaching toward your toes. Let gravity help you sink deeper. Focus on keeping your back straight.",
                duration: 45,
                type: "static",
                reps: 1
            },
            {
                name: "Low Lunge - Right Leg",
                description: "Step right foot forward into a lunge. Lower your back knee to the ground. Sink your hips forward and down. Feel the stretch in your left hip flexor and right hamstring.",
                duration: 60,
                type: "static",
                reps: 1
            },
            {
                name: "Low Lunge - Left Leg",
                description: "Step left foot forward into a lunge. Lower your back knee to the ground. Sink your hips forward and down. Feel the stretch in your right hip flexor and left hamstring.",
                duration: 60,
                type: "static",
                reps: 1
            },
            {
                name: "PNF Front Split - Right Leg",
                description: "Slide into a front split position with your right leg forward. This uses the contract-relax PNF technique for maximum flexibility gains.",
                duration: 15,
                type: "pnf",
                reps: 3,
                pnfPattern: [
                    { phase: "stretch", duration: 15, instruction: "Relax into the stretch. Breathe deeply." },
                    { phase: "contract", duration: 5, instruction: "Push both heels into the ground firmly." },
                    { phase: "relax", duration: 5, instruction: "Relax completely and exhale." },
                    { phase: "deepen", duration: 10, instruction: "Gently slide deeper into the stretch." }
                ]
            },
            {
                name: "PNF Front Split - Left Leg",
                description: "Slide into a front split position with your left leg forward. This uses the contract-relax PNF technique for maximum flexibility gains.",
                duration: 15,
                type: "pnf",
                reps: 3,
                pnfPattern: [
                    { phase: "stretch", duration: 15, instruction: "Relax into the stretch. Breathe deeply." },
                    { phase: "contract", duration: 5, instruction: "Push both heels into the ground firmly." },
                    { phase: "relax", duration: 5, instruction: "Relax completely and exhale." },
                    { phase: "deepen", duration: 10, instruction: "Gently sink deeper into the stretch." }
                ]
            },
            {
                name: "Seated Forward Fold",
                description: "Sit with both legs extended. Fold forward, reaching for your toes. Keep your back straight. This helps cool down and consolidate your gains.",
                duration: 60,
                type: "static",
                reps: 1
            }
        ]
    },

    straddle: {
        name: "Straddle/Middle Split Focus",
        exercises: [
            {
                name: "Wide-Leg Forward Fold",
                description: "Stand with legs wide apart. Fold forward, placing hands on the ground. Walk your hands forward to deepen the stretch. Feel the stretch in your inner thighs.",
                duration: 45,
                type: "static",
                reps: 1
            },
            {
                name: "Butterfly Stretch",
                description: "Sit with soles of feet together, knees out to sides. Hold your feet and gently press your knees toward the ground. Keep your back straight.",
                duration: 60,
                type: "static",
                reps: 1
            },
            {
                name: "Seated Straddle",
                description: "Sit with legs extended wide to the sides. Keep your back straight. Lean forward from your hips, walking your hands forward.",
                duration: 60,
                type: "static",
                reps: 1
            },
            {
                name: "PNF Middle Split",
                description: "Slide into a middle split position (straddle). Use PNF technique to gradually increase your range of motion. This is the most effective method for middle splits.",
                duration: 15,
                type: "pnf",
                reps: 4,
                pnfPattern: [
                    { phase: "stretch", duration: 15, instruction: "Settle into your middle split. Breathe." },
                    { phase: "contract", duration: 5, instruction: "Push both heels outward into the floor." },
                    { phase: "relax", duration: 5, instruction: "Completely relax and exhale deeply." },
                    { phase: "deepen", duration: 10, instruction: "Gently slide your legs wider apart." }
                ]
            },
            {
                name: "Frog Stretch",
                description: "Get on hands and knees. Spread your knees wide apart, keeping feet in line with knees. Lower your forearms to the ground. Rock gently forward and back.",
                duration: 60,
                type: "static",
                reps: 1
            },
            {
                name: "Straddle Cool Down",
                description: "Return to seated straddle position. Reach to each side and center. This helps consolidate your flexibility gains.",
                duration: 45,
                type: "static",
                reps: 1
            }
        ]
    },

    combined: {
        name: "Complete PNF Flexibility Workout",
        exercises: [
            // WARMUP PHASE - Get blood flowing
            {
                name: "Gentle Joint Warmup",
                description: "March in place with high knees. Circle your ankles, hips, and shoulders. Gentle torso twists. Get your body warm and ready to move.",
                duration: 45,
                type: "warmup",
                reps: 1
            },
            {
                name: "Light Cardio Warmup",
                description: "Jumping jacks, jogging in place, or step-touches. Keep it light and controlled. You should feel your heart rate increase slightly and body temperature rise.",
                duration: 60,
                type: "warmup",
                reps: 1
            },

            // DYNAMIC STRETCHING PHASE - Increase range of motion
            {
                name: "Dynamic Leg Swings - Front to Back",
                description: "Hold onto a wall for balance. Swing your right leg forward and back with control. Increase range gradually. Do 30 seconds per leg. This prepares your hamstrings and hip flexors.",
                duration: 60,
                type: "dynamic",
                reps: 1
            },
            {
                name: "Dynamic Leg Swings - Side to Side",
                description: "Hold onto a wall for balance. Swing your right leg side to side across your body. Keep your standing leg straight. Do 30 seconds per leg. This prepares your adductors for straddle work.",
                duration: 60,
                type: "dynamic",
                reps: 1
            },
            {
                name: "Walking Lunges",
                description: "Step forward into a lunge, alternating legs. Keep your back straight and front knee over ankle. This dynamically warms up your hip flexors, glutes, and hamstrings.",
                duration: 45,
                type: "dynamic",
                reps: 1
            },

            // STATIC STRETCHING PHASE - Build baseline flexibility
            {
                name: "Standing Hamstring Stretch",
                description: "Stand with feet hip-width apart. Fold forward, reaching toward your toes. Let gravity help you sink deeper. Keep your back straight and breathe deeply.",
                duration: 45,
                type: "static",
                reps: 1
            },
            {
                name: "Wide-Leg Forward Fold",
                description: "Stand with legs wide apart. Fold forward, placing hands on the ground. Walk your hands forward to deepen the stretch. Feel the stretch in your inner thighs and hamstrings.",
                duration: 45,
                type: "static",
                reps: 1
            },
            {
                name: "Butterfly Stretch",
                description: "Sit with soles of feet together, knees out to sides. Hold your feet and gently press your knees toward the ground. Keep your back straight. This opens your hips for straddle work.",
                duration: 45,
                type: "static",
                reps: 1
            },
            {
                name: "Low Lunge - Right Leg Forward",
                description: "Step right foot forward into a lunge. Lower your back knee to the ground. Sink your hips forward and down. Feel the stretch in your left hip flexor and right hamstring.",
                duration: 50,
                type: "static",
                reps: 1
            },
            {
                name: "Low Lunge - Left Leg Forward",
                description: "Step left foot forward into a lunge. Lower your back knee to the ground. Sink your hips forward and down. Feel the stretch in your right hip flexor and left hamstring.",
                duration: 50,
                type: "static",
                reps: 1
            },
            {
                name: "Seated Straddle",
                description: "Sit with legs extended wide to the sides. Keep your back straight. Lean forward from your hips, walking your hands forward. This prepares you for middle split PNF work.",
                duration: 50,
                type: "static",
                reps: 1
            },

            // PNF PHASE - Maximum flexibility gains
            {
                name: "PNF Front Split - Right Leg",
                description: "Slide into a front split position with your right leg forward. Use the contract-relax PNF technique for maximum flexibility gains. This is where the real progress happens!",
                duration: 15,
                type: "pnf",
                reps: 3,
                pnfPattern: [
                    { phase: "stretch", duration: 15, instruction: "Relax into the stretch. Breathe deeply and settle in." },
                    { phase: "contract", duration: 5, instruction: "Push both heels into the ground firmly. Engage!" },
                    { phase: "relax", duration: 5, instruction: "Relax completely and exhale deeply." },
                    { phase: "deepen", duration: 10, instruction: "Gently slide deeper into the stretch. Find your new edge." }
                ]
            },
            {
                name: "PNF Front Split - Left Leg",
                description: "Slide into a front split position with your left leg forward. Use the contract-relax PNF technique for maximum flexibility gains. Stay focused and breathe!",
                duration: 15,
                type: "pnf",
                reps: 3,
                pnfPattern: [
                    { phase: "stretch", duration: 15, instruction: "Relax into the stretch. Breathe deeply and settle in." },
                    { phase: "contract", duration: 5, instruction: "Push both heels into the ground firmly. Engage!" },
                    { phase: "relax", duration: 5, instruction: "Relax completely and exhale deeply." },
                    { phase: "deepen", duration: 10, instruction: "Gently sink deeper into the stretch. Find your new edge." }
                ]
            },
            {
                name: "Frog Stretch",
                description: "Get on hands and knees. Spread your knees wide apart, keeping feet in line with knees. Lower your forearms to the ground. Rock gently forward and back. This prepares you for the final middle split push.",
                duration: 50,
                type: "static",
                reps: 1
            },
            {
                name: "PNF Middle Split",
                description: "Slide into a middle split position (straddle). Use PNF technique to gradually increase your range of motion. This is the most effective method for middle splits. Give it your all!",
                duration: 15,
                type: "pnf",
                reps: 4,
                pnfPattern: [
                    { phase: "stretch", duration: 15, instruction: "Settle into your middle split. Breathe and relax." },
                    { phase: "contract", duration: 5, instruction: "Push both heels outward into the floor. Maximum effort!" },
                    { phase: "relax", duration: 5, instruction: "Completely relax and exhale deeply. Let go." },
                    { phase: "deepen", duration: 10, instruction: "Gently slide your legs wider apart. New personal best!" }
                ]
            },

            // COOL DOWN PHASE - Consolidate gains
            {
                name: "Seated Forward Fold",
                description: "Sit with both legs extended in front. Fold forward, reaching for your toes. Keep your back straight. Hold this comfortably. This helps consolidate your flexibility gains.",
                duration: 50,
                type: "static",
                reps: 1
            },
            {
                name: "Final Straddle Stretch",
                description: "Return to seated straddle position. Reach to each side and center. Breathe deeply and appreciate your hard work. You're building real flexibility!",
                duration: 45,
                type: "static",
                reps: 1
            }
        ]
    },

    recovery: {
        name: "Recovery & Maintenance",
        description: "Gentle flexibility work for the day after heavy training. This maintains your range of motion while respecting your body's recovery needs.",
        exercises: [
            // GENTLE WARMUP - Very light movement
            {
                name: "Gentle Movement Warmup",
                description: "Very light movement to encourage blood flow. Slow arm circles, gentle torso twists, easy marching in place. Keep it relaxed—you're waking up the tissues, not challenging them.",
                duration: 60,
                type: "warmup",
                reps: 1
            },
            {
                name: "Breathing & Body Scan",
                description: "Stand or sit comfortably. Take 5-6 deep breaths. Notice areas of soreness without judgment. This isn't a fight—you're just checking in with yesterday's work.",
                duration: 45,
                type: "warmup",
                reps: 1
            },

            // LIGHT STATIC STRETCHES - Long holds, low intensity
            {
                name: "Gentle Forward Fold",
                description: "Stand with feet hip-width apart. Fold forward slowly, letting your arms hang. Don't reach for your toes—just let gravity do gentle work. Your hamstrings already worked hard yesterday; this is just encouraging blood flow.",
                duration: 60,
                type: "static",
                reps: 1
            },
            {
                name: "Easy Wide-Leg Stretch",
                description: "Stand with legs comfortably wide (not maximum width). Fold forward and rest your hands on your thighs or the ground. Breathe slowly. This invites circulation to your adductors without demanding anything.",
                duration: 60,
                type: "static",
                reps: 1
            },
            {
                name: "Supported Low Lunge - Right Side",
                description: "Step your right foot forward into a gentle lunge. Keep your hands on the ground or on blocks for support. Don't sink aggressively—find a comfortable depth where you feel a light stretch. Stay below your edge. This is maintenance, not progress.",
                duration: 60,
                type: "static",
                reps: 1
            },
            {
                name: "Supported Low Lunge - Left Side",
                description: "Step your left foot forward into a gentle lunge. Keep your hands on the ground or on blocks for support. Don't sink aggressively—find a comfortable depth where you feel a light stretch. Stay below your edge.",
                duration: 60,
                type: "static",
                reps: 1
            },
            {
                name: "Butterfly Stretch - Relaxed",
                description: "Sit with soles of feet together. Rather than pressing your knees down, just let them settle naturally. Place your hands behind you for support if that feels better. Breathe slowly. You're keeping the door unlocked, not pushing it open.",
                duration: 60,
                type: "static",
                reps: 1
            },
            {
                name: "Comfortable Seated Straddle",
                description: "Sit with legs in a moderate straddle—not your widest position. Keep your back comfortable, even if that means a slight curve. Lean forward just enough to feel gentle sensation. This encourages circulation without poking sore tissue.",
                duration: 60,
                type: "static",
                reps: 1
            },

            // GENTLE PNF - Low intensity, fewer reps
            {
                name: "Recovery PNF - Right Front Split",
                description: "Slide into an easy front split position with your right leg forward—maybe 70-80% of your maximum depth. Use very gentle PNF contractions. Today's goal is neural down-regulation and circulation, not new personal records.",
                duration: 20,
                type: "pnf",
                reps: 2,
                pnfPattern: [
                    { phase: "stretch", duration: 20, instruction: "Settle into a comfortable depth. Breathe slowly and deeply." },
                    { phase: "contract", duration: 6, instruction: "Gently press your heels into the ground. Only 30-40% effort—this is a polite request, not a demand." },
                    { phase: "relax", duration: 6, instruction: "Release completely. Exhale fully and let your muscles soften." },
                    { phase: "deepen", duration: 8, instruction: "If your body offers a bit more depth naturally, accept it. If not, stay exactly where you are. Both are correct." }
                ]
            },
            {
                name: "Recovery PNF - Left Front Split",
                description: "Slide into an easy front split position with your left leg forward—maybe 70-80% of your maximum depth. Use very gentle PNF contractions. Remember: you're maintaining access to flexibility, not expanding it today.",
                duration: 20,
                type: "pnf",
                reps: 2,
                pnfPattern: [
                    { phase: "stretch", duration: 20, instruction: "Settle into a comfortable depth. Breathe slowly and deeply." },
                    { phase: "contract", duration: 6, instruction: "Gently press your heels into the ground. Only 30-40% effort—this is a polite request, not a demand." },
                    { phase: "relax", duration: 6, instruction: "Release completely. Exhale fully and let your muscles soften." },
                    { phase: "deepen", duration: 8, instruction: "If your body offers a bit more depth naturally, accept it. If not, stay exactly where you are. Both are correct." }
                ]
            },
            {
                name: "Recovery PNF - Middle Split",
                description: "Slide into a comfortable middle split position—again, not your maximum width. Today's PNF work is about saying hello to your range of motion, not proving anything to it.",
                duration: 20,
                type: "pnf",
                reps: 2,
                pnfPattern: [
                    { phase: "stretch", duration: 20, instruction: "Find a width that feels accessible. Breathe calmly." },
                    { phase: "contract", duration: 6, instruction: "Press your heels gently outward. Think 30-40% effort—your adductors worked yesterday; be polite." },
                    { phase: "relax", duration: 6, instruction: "Completely relax. Exhale and release all tension." },
                    { phase: "deepen", duration: 8, instruction: "If sliding a bit wider feels easy, do it. Otherwise, hold where you are. No heroics today." }
                ]
            },

            // CLOSING - Gentle integration
            {
                name: "Supine Figure-4 Stretch - Right",
                description: "Lie on your back. Cross your right ankle over your left knee. Gently pull your left thigh toward your chest. This is a gentle hip opener that doesn't load your legs the way seated stretches do. It's a kind way to end.",
                duration: 45,
                type: "static",
                reps: 1
            },
            {
                name: "Supine Figure-4 Stretch - Left",
                description: "Lie on your back. Cross your left ankle over your right knee. Gently pull your right thigh toward your chest. Breathe slowly. You're helping yesterday's work settle in, not adding new stress.",
                duration: 45,
                type: "static",
                reps: 1
            },
            {
                name: "Final Relaxation",
                description: "Lie on your back with legs extended or knees bent—whatever feels most comfortable. Take 5-6 slow, deep breaths. Notice that your legs are still capable and responsive. You showed up politely, and they responded in kind. That's the whole point.",
                duration: 60,
                type: "static",
                reps: 1
            }
        ]
    },

    advanced: {
        name: "Oversplit Training",
        exercises: [
            {
                name: "Dynamic Leg Swings - Front to Back",
                description: "Hold onto a wall for balance. Swing your right leg forward and back with control. Increase range gradually. Switch legs after time is up.",
                duration: 45,
                type: "dynamic",
                reps: 1
            },
            {
                name: "Dynamic Leg Swings - Side to Side",
                description: "Hold onto a wall for balance. Swing your right leg side to side across your body. Keep your standing leg straight. Switch legs after time is up.",
                duration: 45,
                type: "dynamic",
                reps: 1
            },
            {
                name: "Elevated Front Split - Right Leg",
                description: "Place your front (right) foot on a yoga block or cushion. Carefully slide into a front split. HOLD FOR MAX 30 SECONDS. Stop immediately if you feel sharp pain.",
                duration: 25,
                type: "oversplit",
                reps: 1,
                warning: "⚠️ Stop if you feel ANY sharp pain. Discomfort is OK, pain is NOT."
            },
            {
                name: "Elevated Front Split - Left Leg",
                description: "Place your front (left) foot on a yoga block or cushion. Carefully slide into a front split. HOLD FOR MAX 30 SECONDS. Stop immediately if you feel sharp pain.",
                duration: 25,
                type: "oversplit",
                reps: 1,
                warning: "⚠️ Stop if you feel ANY sharp pain. Discomfort is OK, pain is NOT."
            },
            {
                name: "PNF Oversplit - Right Leg",
                description: "Front split with right leg elevated. Using PNF technique carefully. This is advanced training - be cautious and listen to your body.",
                duration: 10,
                type: "pnf",
                reps: 2,
                warning: "⚠️ ADVANCED: Stop immediately if painful.",
                pnfPattern: [
                    { phase: "stretch", duration: 10, instruction: "Settle carefully into position." },
                    { phase: "contract", duration: 5, instruction: "Push heels into floor/block firmly." },
                    { phase: "relax", duration: 5, instruction: "Completely relax. Exhale." },
                    { phase: "deepen", duration: 8, instruction: "Carefully sink a bit deeper if comfortable." }
                ]
            },
            {
                name: "PNF Oversplit - Left Leg",
                description: "Front split with left leg elevated. Using PNF technique carefully. This is advanced training - be cautious and listen to your body.",
                duration: 10,
                type: "pnf",
                reps: 2,
                warning: "⚠️ ADVANCED: Stop immediately if painful.",
                pnfPattern: [
                    { phase: "stretch", duration: 10, instruction: "Settle carefully into position." },
                    { phase: "contract", duration: 5, instruction: "Push heels into floor/block firmly." },
                    { phase: "relax", duration: 5, instruction: "Completely relax. Exhale." },
                    { phase: "deepen", duration: 8, instruction: "Carefully sink a bit deeper if comfortable." }
                ]
            },
            {
                name: "Cool Down - Regular Front Split",
                description: "Return to a regular front split (no elevation). Hold comfortably. This helps your body adjust and prevents injury. Great job!",
                duration: 45,
                type: "static",
                reps: 1
            }
        ]
    }
};
