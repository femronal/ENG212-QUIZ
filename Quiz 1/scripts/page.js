//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.0.20
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 0;
    var weight = DecodeNumber('nWaLROIC7sA=', 565, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Provide two scholarly definitions of writing.";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 1;
    var weight = DecodeNumber('EP9trrIXviU=', 126, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "The elements of an effective writer includes:";
    choice = $('#idGap2_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('NrhSThatdeo='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap2_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('NS5F75tYk/E='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap2_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Gn4X8Jnrbjs='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap2_3').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('nVdUG2tNWAU='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap2_4').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('oRn2Nk/Pb5Q='));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 2;
    var weight = DecodeNumber('ONofH6RxQHY=', 494, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Discuss each of the elements of writing: writer, medium, message, context, audience.";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 3;
    var weight = DecodeNumber('DGrHTsI3YGs=', 863, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "List the principles of effective writing (different from elements):";
    choice = $('#idGap4_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('zhgqpLF8V8A='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap4_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('49tPJ+nf4Tr03IeY'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap4_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('WUhYsA/tRNE='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap4_3').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('frOnXj/k4zU='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap4_4').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('b2d0OuV/tTSPVsgT36GqJb93y6KYi8oz'));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 4;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('thvi6nxt4uo=', 710, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "When writing, the first sentence should capture your main purpose of writing. (What about the second and third? Check note if forgotten)";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('thvi6nxt4uo=', 710, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "This clearly contradicts the funnel method I learnt on Coursera.";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 5;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('8zzes2RQM5k=', 78, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "In academic writing, it is not always possible to know the audience you are writing to.";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('8zzes2RQM5k=', 78, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "Think about this critically!";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 6;
    var weight = DecodeNumber('gG0BdLGDx9s=', 284, 0, 99999);
    var numOfAnswers = 6;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "What are the points to note when interacting with you reader.";
    choice = $('#idGap7_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+ibi0lORLcuCfxvk'));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap7_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('O03/qUEofaRTnc5r'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap7_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('quKvT6XHlN0='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap7_3').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('rMbVXKMYB9o='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap7_4').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Ys8TwEz7Vm0='));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    choice = $('#idGap7_5').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('nlzfGdJAIjQ='));
    var answer5 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 7;
    var weight = DecodeNumber('VTD1IICKJtQ=', 489, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "List the process of composition in the right order.";
    choice = $('#idGap8_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('noeH/hiPJnTaK342'));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap8_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('mpp5qg40Yq/2S+4+'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap8_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('fHFCKhgCHqaiDnvM'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap8_3').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('w385dwPn5JU='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap8_4').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('GecwS+TcMNBZ8k+F'));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 8;
    var weight = DecodeNumber('D1NLRcOA5U4=', 858, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "There are three techniques used for getting ideas during the prewriting stage.";
    choice = $('#idGap9_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('7cqyPJY5FVk='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap9_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('vCnbzbmJcF0='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap9_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('mEQ7oAoF5yw='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 9;
    var weight = DecodeNumber('Da29G6ef5Jo=', 418, 0, 99999);
    var numOfAnswers = 9;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "When fishing for ideas using personal techniques, what are you most likley to do.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Da29G6ef5Jo=', 420, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Free writing";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xVtA41+ln9Q=', 422, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Journal writing";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fZj8wlpTPrM=', 783, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Idea maps";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kREAsNgVf7Q=', 785, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Glean";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('kREAsNgVf7Q=', 787, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Discussion";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('QigTQuSNWNo=', 789, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "Brainstorming";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    var valuation7 = DecodeNumber('/Nzc5t5iY7Y=', 150, -1, 1);
    if (valuation7 === -2) PrintWrongKeyword(questionIndex);
    var choice7 = GetMultipleAnswerChoice(questionIndex, 6);
    if (choice7 === 1) question.noChoice = false;
    var answer7 = new Answer(choice7, valuation7, 1, 0, '');
    answer7.shortTextAnswer = "Invisible writing";
    answer7.shortTextRemark = "";
    question.answers.push(answer7);
    var valuation8 = DecodeNumber('1XaKrS+2OmE=', 152, -1, 1);
    if (valuation8 === -2) PrintWrongKeyword(questionIndex);
    var choice8 = GetMultipleAnswerChoice(questionIndex, 7);
    if (choice8 === 1) question.noChoice = false;
    var answer8 = new Answer(choice8, valuation8, 1, 0, '');
    answer8.shortTextAnswer = "Trigger words";
    answer8.shortTextRemark = "";
    question.answers.push(answer8);
    var valuation9 = DecodeNumber('vsv5i6QSJBk=', 154, -1, 1);
    if (valuation9 === -2) PrintWrongKeyword(questionIndex);
    var choice9 = GetMultipleAnswerChoice(questionIndex, 8);
    if (choice9 === 1) question.noChoice = false;
    var answer9 = new Answer(choice9, valuation9, 1, 0, '');
    answer9.shortTextAnswer = "Recalling";
    answer9.shortTextRemark = "";
    question.answers.push(answer9);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 10;
    var weight = DecodeNumber('7HaNunyt2Fw=', 982, 0, 99999);
    var numOfAnswers = 9;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "When fishing for ideas using writing techniques, what are you most likley to do.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('U+PvlB6fcQc=', 984, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Free writing";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('U+PvlB6fcQc=', 986, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Idea maps";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('d3HPGRF+nGc=', 347, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Journal writing";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('d3HPGRF+nGc=', 349, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Discussion";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('TPTATcXnGWQ=', 351, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Trigger words";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('1mpHPTVnkRs=', 189, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "Invent interest";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    var valuation7 = DecodeNumber('Lz+/PuD2whI=', 191, -1, 1);
    if (valuation7 === -2) PrintWrongKeyword(questionIndex);
    var choice7 = GetMultipleAnswerChoice(questionIndex, 6);
    if (choice7 === 1) question.noChoice = false;
    var answer7 = new Answer(choice7, valuation7, 1, 0, '');
    answer7.shortTextAnswer = "Brainstorming";
    answer7.shortTextRemark = "";
    question.answers.push(answer7);
    var valuation8 = DecodeNumber('yQTEcptguZI=', 301, -1, 1);
    if (valuation8 === -2) PrintWrongKeyword(questionIndex);
    var choice8 = GetMultipleAnswerChoice(questionIndex, 7);
    if (choice8 === 1) question.noChoice = false;
    var answer8 = new Answer(choice8, valuation8, 1, 0, '');
    answer8.shortTextAnswer = "Recalling";
    answer8.shortTextRemark = "";
    question.answers.push(answer8);
    var valuation9 = DecodeNumber('Khq4F3J06cE=', 303, -1, 1);
    if (valuation9 === -2) PrintWrongKeyword(questionIndex);
    var choice9 = GetMultipleAnswerChoice(questionIndex, 8);
    if (choice9 === 1) question.noChoice = false;
    var answer9 = new Answer(choice9, valuation9, 1, 0, '');
    answer9.shortTextAnswer = "Invisible writing";
    answer9.shortTextRemark = "";
    question.answers.push(answer9);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 11;
    var weight = DecodeNumber('t3mvksWwjpo=', 654, 0, 99999);
    var numOfAnswers = 9;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "When fishing for ideas using sharing techniques, what are you most likley to do.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('t3mvksWwjpo=', 656, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Free writing";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ic1eEeJep10=', 658, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Journal writing";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Fv4F37mSOvM=', 660, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Idea maps";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('A9SUQnS4JjI=', 499, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Recalling";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('WhMKeNYU034=', 501, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Invisible writing";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('/uXmERiXeoA=', 503, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "Invent interest";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    var valuation7 = DecodeNumber('4OhlYYQcV/E=', 505, -1, 1);
    if (valuation7 === -2) PrintWrongKeyword(questionIndex);
    var choice7 = GetMultipleAnswerChoice(questionIndex, 6);
    if (choice7 === 1) question.noChoice = false;
    var answer7 = new Answer(choice7, valuation7, 1, 0, '');
    answer7.shortTextAnswer = "Brainstorming";
    answer7.shortTextRemark = "";
    question.answers.push(answer7);
    var valuation8 = DecodeNumber('DGrHTsI3YGs=', 865, -1, 1);
    if (valuation8 === -2) PrintWrongKeyword(questionIndex);
    var choice8 = GetMultipleAnswerChoice(questionIndex, 7);
    if (choice8 === 1) question.noChoice = false;
    var answer8 = new Answer(choice8, valuation8, 1, 0, '');
    answer8.shortTextAnswer = "Trigger words";
    answer8.shortTextRemark = "";
    question.answers.push(answer8);
    var valuation9 = DecodeNumber('Bwsp5OKl4X0=', 867, -1, 1);
    if (valuation9 === -2) PrintWrongKeyword(questionIndex);
    var choice9 = GetMultipleAnswerChoice(questionIndex, 8);
    if (choice9 === 1) question.noChoice = false;
    var answer9 = new Answer(choice9, valuation9, 1, 0, '');
    answer9.shortTextAnswer = "Discussion";
    answer9.shortTextRemark = "";
    question.answers.push(answer9);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 12;
    var weight = DecodeNumber('waBqUYGIN/g=', 413, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "List the three ways of outlining in order of formality or detailedness. (On your own, recall their definitions) ";
    choice = $('#idGap13_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('tU7erxfj/lQ='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap13_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('GxftYreeQOxwtqJ1OjQLGg=='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap13_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('T644L8HciHAJypGA9NvSnw=='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 13;
    var weight = DecodeNumber('/FyU+A5r55A=', 782, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "_______ has been described as thinking aloud on paper.";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('/FyU+A5r55A=', 784, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Brainstorming";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aCpzuHTZzYU=', 623, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Drafting";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 14;
    var weight = DecodeNumber('0/97f5cFTGA=', 987, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "There are two types of drafting:";
    choice = $('#idGap15_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Jy0pgdrkGK8GKqfC'));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap15_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('e7Bpz+SVW0c='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}






