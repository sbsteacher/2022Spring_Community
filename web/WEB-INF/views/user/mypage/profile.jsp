<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="profileImg" value="/res/img/defaultProfile.png" />
<c:if test="${sessionScope.loginUser.profileimg != null}">
    <c:set var="profileImg" value="/res/img/user/${sessionScope.loginUser.iuser}/${sessionScope.loginUser.profileimg}" />
</c:if>
<div class="flex-container flex-direction-column flex-align-center">
    <div class="circular--img circular--size300"><img src="${profileImg}"></div>
    <div>아이디: ${sessionScope.loginUser.uid}</div>
    <div>이름: ${sessionScope.loginUser.nm}</div>
    <div>성별: ${sessionScope.loginUser.gender == 1 ? '남성' : '여성'}</div>
</div>