/**
Popularity contest.
Iggy the Influencer and Toby the Tiktoker are dying to know
who's more popular on social media. 
Toby's TikToks get an average of 400 likes. On average, how many
likes do Iggy's Instagram posts get? 
 */

//data

const postData = [
     {
        post: "A lot of you have asked about my morning skin care routine...",
        likes: 348
     },
     {
        post: "New Year, new me. #blessed",
        likes: 102
     },
     {
        post: "Sunday by the pool 🌴 #vibes #mood #hotdoglegs",
        likes: 544
     },
     {
        post: "Here are my top 5 #notsponsored unbiased dry shampoo recs...",
        likes: 745
     },
     {
        post: "Last day in Hawaii! The tans will fade but the memories will last forever #holidays #foreverhawaii #blessed #followme",
        likes: 412
     },
     {
        post: "Leg day #summerbody2022 #gymshark #beachworkout",
        likes: 275
     },
]

/**pseudo
 * 1. get sum (.reduce())
 * 2. get avg (sum / data length)
 * 3. return avg
 */

function calcAverageLikes(data){
    const sum = data.reduce((total, current)=> {return total + current.likes}, 0)
    const avg = sum / data.length
    return avg.toFixed(2)
} 

//test
console.log(calcAverageLikes(postData))
