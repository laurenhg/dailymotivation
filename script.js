const positiveEmotions = ['happy', 'calm', 'glad', 'cheerful','centered', 'content' ,'fulfilled', 'patient', 'Peaceful', 'present', 'relaxed', 'serene', 'trusting', 'amazed', 'bliss', 'delighted', 'eager', 'ecstatic', 'energized', 'enthusiastic', 'excited', 'free', 'inspired', 'invigorated', 'lively', 'passionate', 'playful', 'radiant', 'refreshed', 'rejuvenated', 'renewed', 'satisfied', 'thrilled', 'present', 'safe', 'warm', 'worthy', 'vibrant', 'curious', 'fascinated', 'interested', 'intrigued', 'involved', 'stimulated', 'adventurous', 'brave', 'capable', 'confident', 'daring', 'determined', 'free', 'grounded', 'proud', 'strong', 'worthy', 'encouraged', 'optimistic', 'trusting', 'grateful', 'lucky', 'blessed', 'relieved', 'thankful']

const negativeEmotions= ['agitated', 'aggravated', 'bitter', 'contempt', 'cynical', 'disdain', 'disturbed', 'edgy', 'exasperated', 'lonely', 'alone', 'hopeless', 'frustrated', 'furious', 'grouchy', 'hostile', 'impatient', 'hangry', 'mean', 'cranky', 'irritated', 'irate', 'moody', 'annoyed', 'fed up', 'on edge', 'outraged', 'pissed', 'resentful', 'upset', 'crazy', 'anguish', 'depressed', 'despondent', 'disappointed', 'discouraged', 'gloomy', 'grief', 'tired', 'heartbroken',  'unhappy', 'upset', 'bored', 'confused', 'nervous', 'ashamed', 'embarrassed', 'Anxious', 'Panic', 'Scared', 'Terrified', 'Helpless', 'Regret', 'Sorry', 'Incapable', 'trapped', 'failing', 'failure', 'imposter', 'anxious', 'burned out', 'exhausted', 'dissatisfied', 'grumpy', 'shocked', 'skeptical', 'worried', 'unsure', 'suspicious']

const positiveMessages= ["You're doing great!",
    "Keep smiling!","What a great attitude!", "You can be an inspiration to others with that attitude", "I'll have what you're having, thanks!", "That's the spirit!"]

const helpfulMessages =["You're stronger than you think!", "Sending positive vibes your way!", "Every cloud has a silver lining!", "Remember that you deserve to be happy!", "Look back and remember how far you have come and don't give up on  yourself!", "You can do this!", "When all else fails: share some chocolate with a friend"]

const outputContainer = document.getElementById('output-container');

const userEmotion = prompt("Enter your emotion:").toLowerCase();

if (userEmotion === 'hangry') {
    outputContainer.innerHTML = "Time for a sandwich!";
} else if (positiveEmotions.includes(userEmotion)) {
    const randomMessage = positiveMessages[Math.floor(Math.random() * positiveMessages.length)];
    outputContainer.innerHTML = randomMessage;
} else if (negativeEmotions.includes(userEmotion)) {
    const randomMessage = helpfulMessages[Math.floor(Math.random() * helpfulMessages.length)];
    outputContainer.innerHTML = randomMessage;
} else {
    outputContainer.innerHTML = "You can always choose happiness! 🌈";
}