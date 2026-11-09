// const memberDB = new Map();
if(localStorage.getItem('memberDB') === undefined)
    localStorage.setItem("memberDB", JSON.stringify({})); // {} > '{}'

// const diaryDB = new Map();
if(localStorage.getItem('diaryDB') === undefined)
    localStorage.setItem("diaryDB", JSON.stringify({})); // {} > '{}'
/* MEMBER DB START */
// sign-up(Create)
const addMember = (id, pw, mail) => {
    console.log('addMember() CALLED!!');
    
    let memberDB = JSON.parse(localStorage.getItem('memberDB')); //'{}' > {}
    
    if(memberDB[id] !== undefined)
        return;
    
    memberDB[id] = {
        u_id: id,
        u_pw: pw,
        u_mail: mail
    };

    localStorage.setItem('memberDB', JSON.stringify(memberDB)); 

    /*
    memberDB.set(id, {
        u_id: id,
        u_pw: pw,
        u_mail: mail
    });
    */
    let diaryDB = JSON.parse(localStorage.getItem('diaryDB'));
    diary[id] = [];   //{''gildong : []}  ---> {'gildong':[]}'
    localStorage.setItem('diaryDB',JSON.stringify(diaryDB));
    /*
    diaryDB.set(id, []);
    

    console.log(memberDB.get(id));
    console.log(diaryDB.get(id));  // []
    */

}

// sign-in(Read)
const searchMember = (id, pw) => {
    console.log('searchMember() CALLED!!');
    
    let memberDB = JSON.parse(localStorage.getItem('memberDB'));
    if(memberDB[id] !== undefined && memberDB[id].u_pw === pw){
        console.log('SIGN IN SUCCESS!!');
        return true;
    }
    console.log('SIGN IN FAIL!!');
    return false;
    /*
    let memberObj = memberDB.get(id);  // {...} or undefined
    if (memberObj !== undefined && memberObj.u_pw === pw) {
        console.log('SIGN IN SUCCESS!!');
        return true;

    } 

    console.log('SIGN IN FAIL!!');
    return false;
    */
}

/* MEMBER DB END */

/* DAIRY DB START */
const addDiary = (diary) => {
    console.log('addDiary() CALLED!!');

    let diaryDB = JSON.parse(localStorage.getItem('diaryDB'));
    let u_id = getCurrentSignInedMemberID();
    let myDiaries = diaryDB[u_id]; // []
    myDiaries.push(diary);
    localStorage.setItem('diaryDB', JSON.stringify(diaryDB));

    /*
    let u_id = getCurrentSignInedMemberID();
    let diaries = diaryDB.get(u_id); // []

    diaries.push(diary);
    console.log(`diaries: ${diaries}`);
    */
}

const searchDiaries = (u_id) => {
    console.log('searchDiaries() CALLED!!');

    let diaryDB = JSON.parse(localStorage.getItem('dirayDB'));
    return diaryDB[u_id];
//    return diaryDB.get(u_id); 
}
/* DAIRY DB END */


/* SET DUMY DATA START */
if (IS_DEV) {
    addMember('gildong', '1234', 'gildong@gmail.com');
    addMember('chanho', '0000', 'chanho@naver.com');
}
/* SET DUMY DATA END */