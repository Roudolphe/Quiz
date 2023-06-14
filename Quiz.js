const questions = [
{
        question: 
        'Qui est le fondateur du Bitcoin? \r1.Satoshi,\r2.Z Zhao, \r3. Vitalik',
        reponse : '1'
},
{
         question: 
        'Quelle est la première crypto à avoir vu le jour? \r1.C CASH,\r2. DIEM, \r3. Bitcoin',
         reponse: '3',
}, 
{
         question: 
        'Quelle est la crypto native de la plateforme Binance, \r1.ether,\r2. bnb, \r3. busd',
         reponse : '2'
},
{
         question : 
         'BUSD est une crypto volatile, \r1.vrai,\r2. faux, \r3. les deux',
         reponse : '2'
}


];

let reponseExacte = 0;
for( let i=0; i<questions.length; i++) {
 let repCand = prompt(questions[i].question); 
 if (repCand == questions[i].reponse){
   alert('reponse exacte');
   reponseExacte += 1;
 } else {
    alert('reponse fausse');

 }
}
 
if (reponseExacte <= 1) {
alert (`tu as ${reponseExacte} reponse exacte sur ${questions.length}`);
} else {
alert (`tu as ${reponseExacte} reponses exactes sur ${questions.length}`);
}