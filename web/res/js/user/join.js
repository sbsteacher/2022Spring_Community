{
    const joinFrmElem = document.querySelector('#join-frm');

    const setIdChkMsg = (data) => {
        const idChkMsgElem = joinFrmElem.querySelector('#id-chk-msg');
        switch(data.result) {
            case 0:
                idChkMsgElem.innerText = '이미 사용중인 아이디 입니다.';
                break;
            case 1:
                idChkMsgElem.innerText = '사용할 수 있는 아이디 입니다.';
                break;
        }
    };

    if(joinFrmElem) {
        //아이디 중복 체크 버튼
        const idBtnChkElem = joinFrmElem.querySelector('#id-btn-chk');
        idBtnChkElem.addEventListener('click', () => {
            const idVal = joinFrmElem.uid.value;
            if(idVal.length < 4) {
                alert('아이디는 4자 이상 작성해 주세요.');
                return;
            }

            fetch(`/user/idChk/${idVal}`)
            .then(res => res.json())
            .then((data) => {
                setIdChkMsg(data);
            }).catch((e)=> {
               console.log(e);
            });
        });
    }
}