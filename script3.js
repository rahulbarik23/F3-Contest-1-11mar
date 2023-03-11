function OpeningCeremony() {
    console.log("Let the games begin");
    const score = { red: 0, blue: 0, green: 0, yellow: 0 };
    setTimeout(() => {
      Race100M(score, (score) => {
        LongJump(score, (score) => {
          HighJump(score, (score) => {
            AwardCeremony(score);
          });
        });
      });
    }, 1000);
  }
  
  function Race100M(score, callbackFnc) {
    console.log("Race100M started");
    console.log("Previous Score:", score);
    const minTime = 10;
    const maxTime = 15;
    const redTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    const blueTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    const greenTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    const yellowTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    const times = { red: redTime, blue: blueTime, green: greenTime, yellow: yellowTime };
    const sortedTimes = Object.keys(times).sort((a, b) => times[a] - times[b]);
    score[sortedTimes[0]] += 50;
    score[sortedTimes[1]] += 25;
    console.log(`${sortedTimes[0]} won the Race100M and got 50 points`);
    console.log(`${sortedTimes[1]} came second in the Race100M and got 25 points`);
    console.log("Updated Score:", score);
    setTimeout(() => {
      callbackFnc(score);
    }, 1000);
  }
  
  function LongJump(score, callbackFnc) {
    console.log("LongJump started");
    console.log("Previous Score:", score);
    const colors = ["red", "blue", "green", "yellow"];
    const winner = colors[Math.floor(Math.random() * colors.length)];
    score[winner] += 150;
    console.log(`${winner} won the LongJump and got 150 points`);
    console.log("Updated Score:", score);
    setTimeout(() => {
      callbackFnc(score);
    }, 2000);
  }
  
  function HighJump(score, callbackFnc) {
    console.log("HighJump started");
    console.log("Previous Score:", score);
    const answer = prompt("Which colour secured the highest jump?");
    if (answer) {
      const color = answer.toLowerCase();
      if (score[color] !== undefined) {
        score[color] += 100;
        console.log(`${color} won the HighJump and got 100 points`);
      } else {
        console.log("Invalid input, event was cancelled");
      }
    } else {
      console.log("Event was cancelled");
    }
    console.log("Updated Score:", score);
    setTimeout(() => {
      callbackFnc(score);
    }, 1000);
  }
  
  function AwardCeremony(score) {
    console.log("AwardCeremony started");
    console.log("Final Score:", score);
    const sortedScore = Object.keys(score).sort((a, b) => score[b] - score[a]);
    console.log(`${sortedScore[0]} came first with ${score[sortedScore[0]]} points`);
    console.log(`${sortedScore[1]} came second with ${score[sortedScore[1]]} points`);
    console.log(`${sortedScore[2]} came third with ${score[sortedScore[2]]}points`);
  }  
 // OpeningCeremony();

 OpeningCeremony((sports) => {
    Race100M(sports, (sports) => {
      LongJump(sports, (sports) => {
        HighJump(sports, (sports) => {
          AwardCeremony(sports);
        });
      });
    });
  });
