const memberDB =new Map();


/* MEMBER DB START */
//sign-up(Create)
const addMember = (id, pw, mail) => {
    console.log('addMember() CALLED!!');

    memberDB.set(id, {
        u_id: id,
        u_pw: pw,
        u_mail: mail
    });

    diaryDB.set(id,[]);

    console.log(memberDB.get(id));
    console.log(diaryDB.get(id));

}





//sign-in(READ)
const searchMember = (id, pw) => {
    console.log('searchMember() CALLED!!');

    let memberOBJ = memberDB.get(id);      //{...} or undefined
    if (memberOBJ !== undefined && memberOBJ.u_pw === pw) {
        console.log('SIGN IN SUCCESS!!');
        return true;
    }

    console.log('SIGN IN FAIL!!');
    return false;
    
        
}

/* MEMBER DB END */

/* DAIRY DB START */ // 누구의 다이어리를 가져오느냐를 기억하는건 세션아이디 
const addDiary = () => {
    console.log('addDiary() CALLED!!');

}
    let u_id = getCurrentSignInedMemberID();
    let diaries = diaryDB.get(u_id);
    diaries.push(diary);

const searchDiaries = () => {
    console.log('searchDiaries() CALLED!!');
}
/* DAIRY DB END */

/* set dumy data start */
if(IS_DEV){
addMember('gildong', '1234', 'gildong@gmail.com');
addMember('chanho', '0000', 'chanho@gmail.com');
}
/* set dumy data end */