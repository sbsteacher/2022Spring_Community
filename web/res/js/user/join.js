{
    const joinFrmElem = document.querySelector('#join-frm');

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
                console.log(data);
            }).catch((e)=> {
               console.log(e);
            });
        });
    }
}