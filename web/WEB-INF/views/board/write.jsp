<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="flex-container flex-center flex-direction-column">
    <h1>글쓰기</h1>
    <form action="/board/write" method="post">
        <div><label>제목 : <input type="text" name="title"></label></div>
        <div><label>내용 : <textarea name="ctnt"></textarea></label></div>
        <div><input type="submit" value="WRITE"></div>
    </form>
</div>