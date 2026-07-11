<script setup lang="ts">
import Section from '~/components/Section.vue';
import SubSection from '~/components/SubSection.vue';
import SubSubSection from '~/components/SubSubSection.vue';
import Equation from '~/components/Equation.vue';
import WikiArticle from '~/components/WikiArticle.vue';
import Theorem from '~/components/Theorem.vue';
import Proof from '~/components/Proof.vue';
import Algorithm from '~/components/Algorithm.vue';
import Citation from '~/components/Citation.vue';
import Image from '~/components/Image.vue';
</script>

<template>
    <WikiArticle>
        <Section>Hermiteの定数</Section>
        <p>
            <b>Hermiteの定数</b>（<b>Hermite's constant</b>）とは，最短ベクトルのノルムと格子の体積の
            <Equation :f="'1/n'" :inline="true" />乗の商の上限のことである．
        </p>

        <SubSection id="definition">定義</SubSection>
        <p>
            <Equation :f="'\\mathscr{L}_n'" :inline="true" />を
            <Equation :f="'n'" :inline="true" />次元格子全体の集合とする．
            このとき，
            <Equation :f="'\\lambda_1(L)'" :inline="true" />を格子
            <Equation :f="'L'" :inline="true" />の最短ベクトルのノルムとしたとき，任意の
            <Equation :f="'L\\in\\mathscr{L}_n'" :inline="true" />に対して，
            <Equation :f="'\\frac{\\lambda_1(L)^2}{\\vol{L}^{\\frac{2}{n}}}'" :inline="true" />は上に有界である．
            <Equation
                :f="'\\gamma_n:=\\sup_{L\\in \\mathscr{L}_n}\\left\\{\\frac{\\lambda_1(L)^2}{\\vol{L}^{\\frac{2}{n}}}\\right\\}'"
                :inline="false" />
            をHermiteの定数と呼ぶ．
        </p>

        <SubSection id="boundedness">Hermiteの定数の有界性</SubSection>

        <Theorem :label="'定理（Minkowski）'">
            <p>
                任意の
                <Equation :f="'n'" :inline="true" />次元格子
                <Equation :f="'L\\subseteq \\R^m'" :inline="true" />に対して，
                <Equation :f="'\\lambda_1(L)'" :inline="true" />
                <Equation :f="'< \\sqrt{n}\\vol{L}^{\\frac{1}{n}}'" :inline="true" />
                が成立する．
            </p>
        </Theorem>

        <Proof>
            <p>
                <Equation :f="'\\mathscr{B}(\\bm{x}, r)'" :inline="true" />を
                <Equation :f="'\\bm{x}\\in \\R^m'" :inline="true" />を中心とする半径
                <Equation :f="'r>0'" :inline="true" />の開球とし，集合
                <Equation :f="'S'" :inline="true" />を
                <Equation :f="'S:=\\mathscr{B}\\left(\\bm{0}, \\sqrt{n} \\vol{L}^{\\frac{1}{n}}\\right)\\cap \\span{L}'"
                    :inline="false" />
                とする．
                このとき，
                <Equation :f="'S'" :inline="true" />は明らかに原点対称な凸集合である．
                また，
                <Equation :f="'S'" :inline="true" />は一辺が
                <Equation :f="'2\\vol{L}^{\\frac{1}{n}}'" :inline="true" />の
                <Equation :f="'n'" :inline="true" />次元超立方体の各頂点以外を含むので，体積は
                <Equation :f="'2^n \\vol{L}'" :inline="true" />よりも大きい．
                従って，Minkowskiの凸体定理から
                <Equation :f="'\\lambda_1(L)\\le \\sqrt{n} \\vol{L}^{\\frac{1}{n}}'" :inline="false" />
                が従う．
            </p>
        </Proof>

        Minkowskiの定理から，
        <Equation
            :f="'\\forall L\\in \\mathscr{L}_n \\left(\\frac{\\lambda_1(L)^2}{\\vol{L}^{\\frac{2}{n}}}< n\\right)'"
            :inline="false" />
        が従い，即ち
        <Equation :f="'\\gamma_n'" :inline="true" />が上に有界であることがわかる．

        <SubSection id="known">既知のHermiteの定数の値</SubSection>

        <p>
            いくつかの小さな整数についてはHermiteの定数の値が知られている：<br>
            <Equation :f="'\\displaystyle \\gamma_1=1'" :inline="true" /><br>
            <Equation :f="'\\displaystyle \\gamma_2=\\frac{2}{\\sqrt{3}}=1.154700\\ldots'" :inline="true" /><br>
            <Equation :f="'\\displaystyle \\gamma_3=\\sqrt[3]{2}=1.259921\\ldots'" :inline="true" /><br>
            <Equation :f="'\\displaystyle \\gamma_4=\\sqrt{2}=1.414213\\ldots'" :inline="true" /><br>
            <Equation :f="'\\displaystyle \\gamma_5=\\sqrt[5]{8}=1.515716\\ldots'" :inline="true" /><br>
            <Equation :f="'\\displaystyle \\gamma_6=\\sqrt[6]{\\frac{64}{3}}=1.665366\\ldots'" :inline="true" /><br>
            <Equation :f="'\\displaystyle \\gamma_7=\\sqrt[7]{64}=1.811447\\ldots'" :inline="true" /><br>
            <Equation :f="'\\displaystyle \\gamma_8=2'" :inline="true" /><br>
            <Equation :f="'\\displaystyle \\gamma_{24}=4'" :inline="true" />
        </p>

        <SubSection id="upper">Hermiteの定数の上界</SubSection>

        <div class="table-wrapper">
            <table class="wiki-table">
                <thead>
                    <tr>
                        <th>論文</th>
                        <th>Hermiteの定数の上界</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Minkowski</td>
                        <td>
                            <Equation
                                :f="'4\\left\\{\\frac{\\pi^{\\frac{n}{2}}}{\\Gamma\\left(1+\\frac{n}{2}\\right)}\\right\\}^{-\\frac{2}{n}}'"
                                :inline="true" />
                        </td>
                    </tr>
                    <tr>
                        <td>Milnor and Husemoller(1973)</td>
                        <td>
                            <Equation :f="'\\frac{n}{4}+1'" :inline="true" />
                        </td>
                    </tr>
                    <tr>
                        <td>Wen and Chang(2018)
                        </td>
                        <td>
                            <Equation :f="'\\frac{n}{8}+\\frac{6}{5}'" :inline="true" />
                        </td>
                    </tr>
                    <tr>
                        <td>Wen, Chang, and Weng(2019)</td>
                        <td>
                            <Equation :f="'\\frac{n}{8.5}+2'" :inline="true" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <Proof :label="'（Wen and Chang(2018)による上界評価の証明）'">
            <p>
                Minkowskiの定理から，
                <Equation
                    :f="'\\gamma_n \\le 4\\left\\{\\frac{\\pi^{\\frac{n}{2}}}{\\Gamma\\left(1+\\frac{n}{2}\\right)}\\right\\}^{-\\frac{2}{n}}'"
                    :inline="false" />
                であったので，
                <Equation
                    :f="'\\begin{aligned}&4\\left\\{\\frac{\\pi^{\\frac{n}{2}}}{\\Gamma\\left(1+\\frac{n}{2}\\right)}\\right\\}^{-\\frac{2}{n}}< \\frac{n}{8}+\\frac{6}{5}\\\\ \\iff & \\Gamma\\left(2+\\frac{n}{2}\\right)^2 <\\left\\{\\frac{\\pi(n+9.6)}{16}\\right\\}^n \\end{aligned}'"
                    :inline="false" />
                が示せればよい．
                ここで，
                <Equation
                    :f="'\\forall x\\ge 1 \\left(\\Gamma(1+x)< x^x e^{-x}\\sqrt{2\\pi\\left(x+\\frac{e^2}{2\\pi}-1\\right)}\\right)'"
                    :inline="false" />
                であるので，示すべきは
                <Equation
                    :f="'\\forall n\\in \\N\\left(\\left(1+\\frac{n}{2}\\right)^2 \\left(\\frac{n}{2}\\right)^n e^{-n}\\left(\\pi n+e^2-2\\pi \\right)< \\left(\\frac{\\pi n+9.6)}{16} \\right)^n\\right)'"
                    :inline="false" />
                に移る．
                従って，
                <Equation
                    :f="'\\forall t\\in \\{1, 1.5, 2, \\ldots\\}\\left(\\frac{\\left\\{\\frac{e\\pi}{8}\\left(1+\\frac{t}{4.8}\\right)\\right\\}^{2t}}{(1+t)^2 (2\\pi t+e^2-2\\pi)} > 1\\right)'"
                    :inline="false" />
                を示せばよい．
                <Equation
                    :f="'\\phi(t):=\\frac{\\left\\{\\frac{e\\pi}{8}\\left(1+\\frac{t}{4.8}\\right)\\right\\}^{2t}}{(1+t)^2 (2\\pi t+e^2-2\\pi)}'"
                    :inline="false" />
                と置くと，直接代入することにより，
                <Equation :f="'t\\le 15'" :inline="true" />の場合に成立することがわかる．
                従って，
                <Equation :f="'\\psi(t)'" :inline="true" />
                <Equation :f="':=\\log \\phi(t)'" :inline="true" />が
                <Equation :f="'t \\ge 15'" :inline="true" />で単調増加であることが示せれば十分である．
                <Equation :f="'\\alpha := \\frac{e^2}{2\\pi}-1=0.176004\\ldots'" :inline="true" />とすると，
                <Equation
                    :f="'\\psi(t)=2t \\log \\frac{e\\pi}{8}+2t \\log\\left(1+\\frac{4.8}{t}\\right)-2 \\log(t+1)-\\log(2\\pi (t+\\alpha))'"
                    :inline="false" />
                であり，この
                <Equation :f="'t'" :inline="true" />による微分は
                <Equation
                    :f="'\\dv{t}\\psi(t)=2\\log\\frac{e\\pi}{8}+2\\log{\\left(1+\\frac{4.8}{t}\\right)}-\\frac{9.6}{t+4.8}-\\frac{2}{t+1}-\\frac{1}{t+\\alpha}'"
                    :inline="false" />
                である．
                ここで，
                <Equation :f="'\\forall x\\ge 0\\left( \\log(1+x)\\ge \\frac{2x}{2+x}\\right)'" :inline="false" />
                であるので，
                <Equation
                    :f="'\\dv{t}\\psi(t)\\ge 2\\log\\frac{e\\pi}{8}+\\frac{9.6}{t+2.4}-\\frac{9.6}{t+4.8}-\\frac{2}{t+1}-\\frac{1}{t+\\alpha}'"
                    :inline="false" />
                となる．
                ここで，
                <Equation
                    :f="'\\rho(t):=2\\log\\frac{e\\pi}{8}+\\frac{9.6}{t+2.4}-\\frac{9.6}{t+4.8}-\\frac{2}{t+1}-\\frac{1}{t+\\alpha}'"
                    :inline="false" />
                とおくと，
                <Equation :f="'t\\ge 0'" :inline="true" />で
                <Equation :f="'\\left.\\dv{t}\\psi(t)\\right|_{t=15}\\ge \\rho(15)=0.006558\\ldots >0'"
                    :inline="false" />である．
                よって，
                <Equation :f="'\\rho(t)'" :inline="true" />が
                <Equation :f="'t\\ge 15'" :inline="true" />で単調増加であることが示せれば十分である．
                <Equation
                    :f="'\\begin{aligned}\\dv{t}\\rho(t)&=-\\frac{9.6}{(t+2.4)^2}+\\frac{9.6}{(t+4.8)^2}+\\frac{2}{(t+1)^2}+\\frac{1}{(t+\\alpha)^2}\\\\&>-\\frac{9.6}{(t+2.4)^2}+\\frac{9.6}{(t+4.8)^2}+\\frac{2}{(t+2.4)^2}+\\frac{1}{(t+2.4)^2}\\\\&=\\frac{1}{(t+2.4)^2}\\left\\{9.6\\frac{(t+2.4)^2}{(t+4.8)^2}-6.6\\right\\}\\end{aligned}'"
                    :inline="false" />
                であり，
                <Equation
                    :f="'\\dv{t}\\left[9.6\\frac{(t+2.4)^2}{(t+4.8)^2}-6.6\\right]=\\frac{46.08t+110.592}{(t+4.8)^3}>0\\quad (t\\ge 0)'"
                    :inline="false" />
                より，
                <Equation :f="'9.6\\frac{(t+2.4)^2}{(t+4.8)^2}-6.6'" :inline="true" />は
                <Equation :f="'t\\ge 0'" :inline="true" />で単調増加且つ
                <Equation :f="'t=15'" :inline="true" />のとき
                <Equation :f="'0.813774\\ldots >0'" :inline="true" />なので，
                <Equation :f="'t\\ge 15'" :inline="true" />で
                <Equation :f="'\\dv{t}\\rho(t)'" :inline="true" />
                <Equation :f="'>0'" :inline="true" />である．
                以上より，定理を得る．
            </p>
        </Proof>

        <SubSection id="citation">参考文献</SubSection>

        <ul>
            <li>
                <Citation author="青野良範，安田雅哉" year="2019" title="格子暗号解読のための数学的基礎" other="ISBN 978-4764905986" />
            </li>
            <li>
                <Citation author="Jinming Wen and Xiao-Wen Chang" year="2018" title="On the KZ Reduction"
                    other="IEEE Transactions on Information Theory. doi: 10.48550/arXiv.1702.08152" />
            </li>
            <li>
                <Citation author="Necdet Batir" year="2008" title="Inequalities for the gamma function"
                    other="Archiv der Mathematik. doi: 10.1007/s00013-008-2856-9" />
            </li>
            <li>
                <Citation author="Flemming Topsøe" year="2004" title="Some bounds for the logarithmic function"
                    other="Research Group in Mathematical Inequalities and Applications (RGMIA)." />
            </li>
            <li>
                <Citation author="Jinming Wen, Xiao-Wen Chang, Jian Weng" year="2019"
                    title="Improved Upper Bounds on the Hermite and KZ Constants"
                    other="doi: 10.48550/arXiv.1904.09395" />
            </li>
            <li>
                <Citation author="John Milnor and Dale Husemolle" year="1973" title="Symmetric bilinear forms"
                    other="ISIT 2019. doi: 10.1007/978-3-642-88330-9" />
            </li>
        </ul>
    </WikiArticle>
</template>
