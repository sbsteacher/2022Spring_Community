package com.koreait.community.board;

import com.koreait.community.model.BoardDto;
import com.koreait.community.model.BoardVo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    List<BoardVo> selBoardList(BoardDto dto);
}
