package com.koreait.community.user;

import com.koreait.community.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/login")
    public void login() {}

    @GetMapping("/join")
    public void join() {}

    @PostMapping("/join")
    public String joinProc(UserEntity entity) {
        //TODO - 회원가입 성공하면 로그인 처리
        int result = service.join(entity);
        return "/user/login";
    }

    @GetMapping("/idChk/{uid}")
    @ResponseBody
    public Map<String, Integer> idChk(@PathVariable String uid) {
        System.out.println("uid : " + uid);

        Map<String, Integer> res = new HashMap();
        res.put("result", service.idChk(uid));

        return res;
    }
}
