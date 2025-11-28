// scenarios.js

export const ALL_SCENARIOS = [
    // ----------------------------------------------------------------------------------
    // 1. Family & Home (15 Scenarios)
    // ----------------------------------------------------------------------------------
    // --- Easy ---
    {
        id: 101, title: "The Silent Meal", category: "Family & Home", difficulty: "Easy",
        empathyTarget: "Your younger sibling",
        situation: "You've just come home from a long day, looking forward to dinner. However, your younger sibling, a final year student buried in exam preparation, has been completely silent. They offer only one-word answers. When you tried to share a story, they abruptly walked away, leaving you feeling ignored.",
        yourFeeling: "Ignored, annoyed, and concerned.",
        otherAction: "Being silent and withdrawn at dinner.",
        idealPerspective: { keywords: ["fear of failure", "exam stress", "overwhelmed", "anxiety", "guilt", "exhausted"], avoid: ["sulking", "rude", "disrespectful"], goal: "Recognize their behavior is a symptom of intense internal pressure, not a personal attack.", resolution: "Approach them later with a soft, non-demanding tone: 'Hey, I noticed you seem really stressed. No pressure to talk, but I'm here for you if you need anything.'" }
    },
    {
        id: 102, title: "The Messy Room", category: "Family & Home", difficulty: "Easy",
        empathyTarget: "Your sibling who shares your room",
        situation: "You like to keep your shared room tidy as it helps you relax. However, your sibling consistently leaves their clothes, books, and snacks scattered everywhere. The chaos is starting to make you feel like your personal space isn't respected.",
        yourFeeling: "Frustrated, disrespected, and cramped.",
        otherAction: "Leaving their side of the room messy.",
        idealPerspective: { keywords: ["disorganized", "stressed with work", "different standard", "overwhelmed", "forgetful"], avoid: ["lazy", "inconsiderate", "dirty"], goal: "Recognize their messiness as a sign of being overwhelmed or having a different standard, not disrespect.", resolution: "Frame it as a team effort: 'I feel stressed when the room is messy. Can we agree to spend 10 minutes every evening tidying up our own sides? It would really help me relax.'" }
    },
    {
        id: 103, title: "The TV Remote Battle", category: "Family & Home", difficulty: "Easy",
        empathyTarget: "Your father",
        situation: "You were in the middle of watching your favorite weekly show. Your father walked in, took the remote, and switched to the news without asking. This happens almost every evening, making you feel like your choices are unimportant.",
        yourFeeling: "Annoyed, unimportant, and treated like a child.",
        otherAction: "Taking control of the TV remote without discussion.",
        idealPerspective: { keywords: ["habit", "desire to unwind", "unaware", "entitlement", "routine", "long day"], avoid: ["selfish", "controlling", "dictator"], goal: "See his action as a deeply ingrained habit to de-stress, not a personal slight.", resolution: "Approach it with a calm plan: 'Dad, I know you want to watch the news, but my show is on right now. It ends at 9. Can we agree that I get the TV until then on these days?'" }
    },
    {
        id: 104, title: "The Last-Minute Errand", category: "Family & Home", difficulty: "Easy",
        empathyTarget: "Your mother",
        situation: "You are dressed and just about to step out the door to meet your friends, a plan you've been looking forward to all week. Your mother suddenly remembers she needs something from the store and asks you to go 'quickly'. You feel your personal time is consistently undervalued.",
        yourFeeling: "Irritated, delayed, and that your plans don't matter.",
        otherAction: "Asking for a last-minute favor at an inconvenient time.",
        idealPerspective: { keywords: ["forgetful", "genuinely needs it", "poor timing", "managing many tasks", "multitasking"], avoid: ["demanding", "disrespectful", "thoughtless"], goal: "Understand her request likely comes from a place of mental overload, not a disregard for your time.", resolution: "State your constraint and offer a solution: 'I'm literally walking out the door right now. Can it wait until I get back in two hours, or is it an emergency for tonight's dinner?'" }
    },
    {
        id: 105, title: "The 'Helpful' Cooking Advice", category: "Family & Home", difficulty: "Easy",
        empathyTarget: "Your visiting aunt",
        situation: "You are trying a new recipe you're excited about. Your visiting aunt comes into the kitchen and starts giving you a stream of unsolicited advice: 'You should add more ginger.' 'Don't cut the onions that way.' 'That's not how your mother used to make it.' You feel she thinks you are incompetent.",
        yourFeeling: "Micromanaged, incompetent, and annoyed.",
        otherAction: "Giving constant, unsolicited advice.",
        idealPerspective: { keywords: ["desire to help", "sharing experience", "habit", "bonding", "showing care", "tradition"], avoid: ["critical", "bossy", "know-it-all"], goal: "Recognize her intention is likely to connect and share her experience, not to criticize.", resolution: "Acknowledge her and gently redirect: 'Thanks for the tip, Auntie! I'm trying this specific recipe today, but I'd love for you to teach me your way of making it tomorrow.'" }
    },
    // --- Medium ---
    {
        id: 106, title: "Unannounced Guests", category: "Family & Home", difficulty: "Medium",
        empathyTarget: "Your spouse",
        situation: "You work from home with a critical deadline. This morning, your spouse’s distant relatives arrived unannounced for a week-long stay. Your small apartment is now chaotic. You see the stress on your spouse's face; they are caught between cultural obligations and the reality of the disruption. When you suggest a hotel, they get defensive, fearing it will be a grave insult.",
        yourFeeling: "Privacy violated, resentful, and anxious about work.",
        otherAction: "Insisting on hosting relatives despite the inconvenience.",
        idealPerspective: { keywords: ["social obligation", "fear of insulting elders", "cultural duty", "shame", "trapped", "no good options"], avoid: ["weak", "inconsiderate", "unreasonable"], goal: "Understand your spouse is not choosing them over you; they are trapped in a cultural bind.", resolution: "Address your spouse privately and collaboratively: 'I see how much pressure you're under. We are a team. Let's figure out a plan to manage this. Can we set some boundaries, like quiet hours for my work?'" }
    },
    {
        id: 107, title: "The Secret Financial Decision", category: "Family & Home", difficulty: "Medium",
        empathyTarget: "Your spouse",
        situation: "You just discovered your spouse invested a significant amount from your shared savings into a 'guaranteed high-return' scheme pitched by a friend, without consulting you. The money is now at risk. You feel your trust and partnership have been completely violated.",
        yourFeeling: "Betrayed, disrespected, and terrified about your financial future.",
        otherAction: "Making a unilateral financial decision with shared money.",
        idealPerspective: { keywords: ["opportunity", "fear of missing out", "good surprise", "shame about asking", "wanted to impress", "financial pressure"], avoid: ["secretive", "reckless", "stupid", "deceitful"], goal: "See their action as a misguided, perhaps desperate, attempt to improve your family's situation.", resolution: "Focus on the process, not just the outcome: 'I feel hurt because we are a team, and we didn't decide this together. From now on, all financial decisions over [amount] must be a joint one, no matter how good the opportunity seems.'" }
    },
    {
        id: 108, title: "The Parenting Style Clash", category: "Family & Home", difficulty: "Medium",
        empathyTarget: "Your spouse",
        situation: "You and your spouse have a major disagreement on parenting. You believe in clear rules and consequences, while they are more lenient. You had forbidden your child from using the tablet on weekdays, but you just found them playing on it while your spouse casually watches. You feel completely undermined.",
        yourFeeling: "Undermined, angry, and disrespected as a parent.",
        otherAction: "Being more lenient with a child and breaking an agreed-upon rule.",
        idealPerspective: { keywords: ["different upbringing", "wants to be the 'fun' parent", "fear of child's resentment", "gentle parenting", "avoiding conflict"], avoid: ["weak", "inconsistent", "pushover"], goal: "Recognize their action stems from a different parenting philosophy and their own emotional needs regarding the child.", resolution: "Discuss it away from the child: 'We need to be a united front for our child. When you go against a rule we set, it undermines both of us. If you disagree with a rule, let's discuss it privately first and adjust it together.'" }
    },
    {
        id: 109, title: "The Sibling Loan Refusal", category: "Family & Home", difficulty: "Medium",
        empathyTarget: "Your sibling",
        situation: "Your sibling asked for a large loan for what you see as a very risky business idea. You politely but firmly refused, explaining you couldn't risk your family's savings. Now, they are ignoring your calls and being cold at family gatherings. You feel you're being punished for being responsible.",
        yourFeeling: "Guilty, defensive, and angry at their reaction.",
        otherAction: "Giving the cold shoulder after being refused a loan.",
        idealPerspective: { keywords: ["desperate", "embarrassed", "humiliated", "last hope", "feeling of betrayal", "shame"], avoid: ["entitled", "manipulative", "childish"], goal: "Understand their coldness comes from a place of deep embarrassment and desperation, not malice.", resolution: "Reach out without mentioning the money: 'I feel like there's a distance between us, and it's upsetting me. Our relationship is more important than money. I'm sorry I couldn't help the way you wanted, but I'm still your brother/sister and I'm here for you.'" }
    },
    {
        id: 110, title: "The Distant Sibling Caregiver", category: "Family & Home", difficulty: "Medium",
        empathyTarget: "Your sibling who lives in another city",
        situation: "You are the primary caregiver for your aging parents, handling daily appointments, meals, and emergencies. Your sibling, who lives in another city, calls once a week and offers cheerful but unhelpful advice. You are exhausted and feel deeply resentful of their lack of practical support.",
        yourFeeling: "Resentful, overwhelmed, and utterly alone in your responsibility.",
        otherAction: "Not contributing enough to parental care from a distance.",
        idealPerspective: { keywords: ["guilt", "helpless", "distance", "financial constraints", "own family demands", "unaware of the full burden", "denial"], avoid: ["selfish", "uncaring", "irresponsible"], goal: "Recognize their inaction may be driven by their own constraints and a profound sense of guilt and helplessness.", resolution: "Be specific and direct in your request for help: 'I am burning out with Mom and Dad's care. I need your help. I've made a list of three things you can do from there: [1] manage their bill payments online, [2] research and book a good physiotherapist, [3] contribute [amount] for a part-time nurse.'" }
    },
    // --- Hard ---
    {
        id: 111, title: "The Critic in the Kitchen", category: "Family & Home", difficulty: "Hard",
        empathyTarget: "Your mother-in-law",
        situation: "You live in a joint family. After a full day at your job, you cook to relax. However, your mother-in-law constantly hovers, criticizing your methods: 'That's too much oil.' 'Why use packaged masala?' 'You're holding the knife wrong.' Her comments feel like a relentless attack on your competence, turning your sanctuary into a battlefield.",
        yourFeeling: "Disrespected, defensive, and constantly on edge.",
        otherAction: "Constant criticism of your cooking.",
        idealPerspective: { keywords: ["loss of identity", "feeling useless", "fear of irrelevance", "maintaining control", "legacy", "anxiety about health"], avoid: ["controlling", "meddling", "tyrannical", "malicious"], goal: "See her criticism not as an attack, but as a desperate attempt to hold onto her role and relevance.", resolution: "Validate her role before setting a boundary: 'Mummy-ji, your recipes are the heart of this home. Could we make Sundays our special cooking day where you teach me? On weeknights, please trust me to manage, as I'm often short on time.'" }
    },
    {
        id: 112, title: "The Inheritance Dispute", category: "Family & Home", difficulty: "Hard",
        empathyTarget: "Your sibling",
        situation: "After your parents' passing, your sibling is aggressively demanding a larger share of the inheritance, claiming they provided more direct, physical care in the final years. You feel this completely ignores your own significant financial and emotional contributions over a longer period, and you see their demand as pure greed during a time of grief.",
        yourFeeling: "Betrayed, angry, and grieving.",
        otherAction: "Demanding a larger share of inheritance based on recent caregiving.",
        idealPerspective: { keywords: ["unseen labor", "unappreciated", "financial desperation", "grief-driven entitlement", "perceived sacrifice", "validation"], avoid: ["greedy", "selfish", "ungrateful", "manipulative"], goal: "Recognize their demand is likely a cry for validation for their recent, intense, and perhaps traumatic sacrifice.", resolution: "Acknowledge their contribution before stating your own: 'I know how much you did for Mom and Dad in those last years, and it was immense. I want to make sure that is honored. I also feel my contributions, though different, were significant. Let's talk to a neutral mediator to find a solution that is fair to both of us.'" }
    },
    {
        id: 113, title: "Inter-caste Marriage Standoff", category: "Family & Home", difficulty: "Hard",
        empathyTarget: "Your parents",
        situation: "You are in love with a wonderful person who happens to be from a different caste. You've told your parents, and they have reacted with horror, threatening to disown you and cut all ties if you proceed with the marriage. They claim you are destroying the family's reputation and honor.",
        yourFeeling: "Heartbroken, betrayed, and furious at their prejudice.",
        otherAction: "Opposing a child's marriage choice with threats.",
        idealPerspective: { keywords: ["fear of social ostracism", "community reputation", "deeply ingrained prejudice", "sense of duty", "loss of face", "genuine terror"], avoid: ["bigoted", "controlling", "blackmailing", "hateful"], goal: "Understand their threats come from a place of deep-seated, genuine terror of social ruin, not a lack of love for you.", resolution: "State your position with love but firmness: 'I understand you are terrified of what the community will say, and that this is hard for you. But this is my life and my happiness. I am not asking for your permission, but I am desperately asking for your love and support. I hope you can find a way to give it.'" }
    },
    {
        id: 114, title: "The Unconventional Career Choice", category: "Family & Home", difficulty: "Hard",
        empathyTarget: "Your father",
        situation: "You are a brilliant student who has always excelled in science. After getting into a top engineering college, you've realized your true passion is for music. You've told your father you want to drop out to pursue it professionally. He has reacted with fury, forbidding it and calling it a 'waste of your life.' You feel completely misunderstood.",
        yourFeeling: "Misunderstood, trapped, and resentful.",
        otherAction: "Forbidding a child from pursuing an unconventional career.",
        idealPerspective: { keywords: ["fear of poverty", "anxiety for your future", "sacrificed for your education", "social status", "investment", "don't understand that world"], avoid: ["dictatorial", "narrow-minded", "uncaring"], goal: "Recognize his anger is a manifestation of his deep fear for your financial security and future well-being.", resolution: "Present a structured plan, not just a dream: 'Dad, I know you're scared for me. This isn't just a whim. I've created a one-year plan that includes [music classes, part-time job, creating a portfolio]. Can we agree to review my progress in one year? I need a chance to prove this is a viable path.'" }
    },
    {
        id: 115, title: "The Hidden Addiction", category: "Family & Home", difficulty: "Hard",
        empathyTarget: "Your spouse",
        situation: "You have just discovered that your spouse has a hidden, severe online gambling addiction and has secretly accumulated a massive debt that threatens your family's financial stability. You feel a catastrophic sense of betrayal, rage, and fear. The person you trusted most has been lying to you for years.",
        yourFeeling: "Betrayed, furious, and terrified.",
        otherAction: "Hiding a severe addiction and debt.",
        idealPerspective: { keywords: ["shame", "disease of addiction", "inability to stop", "fear of judgment", "desperation to win it back", "feeling trapped", "depression"], avoid: ["liar", "weak", "immoral", "criminal"], goal: "Separate the person from the disease. Their hiding is a symptom of the shame and powerlessness caused by the addiction.", resolution: "This requires professional intervention. 'I am devastated by the lies. But right now, I see you are sick and need help. We cannot fix this alone. My support is conditional on you agreeing to see an addiction counselor with me, starting tomorrow. We will face the debt, but you must face the addiction.'" }
    }
];
