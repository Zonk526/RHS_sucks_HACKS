const autoAnswer = () => {
    setInterval(() => {
        const { stateNode : {state, props} } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
            {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
        })())[1].children[0]._owner;

        if (state.stage && state.stage == "question") if (state.question.qType != "typing") {
            let answerContainers = document.querySelectorAll(`[class*='answerContainer']`);

            [...answerContainers][Array.from(answerContainers).map((x, i) => x.innerHTML.includes(state.question.correctAnswers[0]) ? i : null).filter(i => i !== null)[0]].click(); 
        } else {
            Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(state.question.answers[0]);
        } else if (window.location.href.includes('battleroyale')) {
            let answerContainers = document.querySelectorAll(`[class*='answerContainer']`);

            if (document.querySelector("[class*='typingAnswerWrapper']")) {
                Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(props.client.question.answers[0]);
            } else if (answerContainers) {
                [...answerContainers][Array.from(answerContainers).map((x, i) => x.innerHTML.includes(props.client.question.correctAnswers[0]) ? i : null).filter(i => i !== null)[0]].click();
            }
        }
    }, 450);
}

autoAnswer();
