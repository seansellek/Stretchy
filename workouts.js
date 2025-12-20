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
