import React, { Component } from 'react';
import { render } from "react-dom";
import Header from '../myTrack/header'
import School from './school'
export default class AroundSchool extends React.Component {
    render() {
        return <div>
            <Header headerText="周边学校" icon="idcard"></Header>
            <School schoolUrl="https://gss3.bdstatic.com/84oSdTum2Q5BphGlnYG/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=645d0c96898b0c96532e567422594c4f&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2F359b033b5bb5c9ea390b1ffbd739b6003af3b329.jpg"
            schoolName="浙江科技学院" schoolDist="4" ind="浙江科技学院（Zhejiang University of Science and Technology）简称“浙科院”，是一所由浙江省人民政府举办，以工学为主，集工学、艺术学、管理学、文学、理学、经济学为一体的多学科全日制省属公办普通高等学校，拥有硕士、学士学位授予权，外国留学生、华侨和港澳台学生招生资格，2010年入选卓越工程师教育培养计划。"></School>
            <School schoolUrl="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2180604143,1650899634&fm=58"
            schoolName="浙江工业大学" schoolDist="6" ind="浙江工业大学（Zhejiang University of Technology），简称浙工大，是中华人民共和国教育部与浙江省人民政府共建的浙江首批省属重点大学[1]  ，国家“2011计划”首批14所牵头高校，首批“卓越计划”入选高校，亚洲规划院校联盟（APSA）成员，入选国家“111计划”。学校始建于1953年，其前身可以追溯到1910年创立的浙江中等工业学堂，1993年12月由浙江工学院更名为浙江工业大学。2009年6月8日，浙江省人民政府和教育部签订共建协议，浙江工业大学进入省部共建高校行列。2013年5月，学校牵头的“长三角绿色制药协同创新中心”成为全国首批14家2011协同创新中心之一。"></School>
            <School schoolUrl="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=669507231,1168753925&fm=58&u_exp_0=102473616,835448515&fm_exp_0=86&bpow=400&bpoh=400"
            schoolName="浙江外国语大学" schoolDist="5" ind="浙江外国语学院（Zhejiang International Studies University）位于浙江省杭州市，是一所由浙江省人民政府举办，以外国语言文学为基础，多学科协调发展的全日制普通高等学校。浙江外国语学院前身为成立于1955年的浙江省（中学）教师进修学校；1956年7月，改建为浙江省教师进修学院；1958年，改名为浙江文教学院；1960年3月，更名为浙江教育学院；2010年4月，升格更名为浙江外国语学院。"></School>
        </div>;
    }
}