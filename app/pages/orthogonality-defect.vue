<script setup lang="ts">
import Section from '~/components/Section.vue';
import SubSection from '~/components/SubSection.vue';
import SubSubSection from '~/components/SubSubSection.vue';
import Equation from '~/components/Equation.vue';
import WikiArticle from '~/components/WikiArticle.vue';
import Citation from '~/components/Citation.vue';
import Theorem from '~/components/Theorem.vue';
</script>

<template>
    <WikiArticle>
        <Section>直交性欠陥</Section>
        <p>
            格子の<b>直交性欠陥</b>（<b>orthogonality defect</b>）とは，格子基底の品質を表す指標の一つである．
            直交性欠陥を小さくすることと，基底がほぼ直交することは対応することが知られているため，良い基底を求める上で重要な指標の一つと言える．
        </p>

        <SubSection id="definition">定義</SubSection>
        <p>
            <Equation :f="'\\{\\bm{b}_1,\\ldots,\\bm{b}_n\\}'" :inline="true" />を
            <Equation :f="'n'" :inline="true" />次元格子
            <Equation :f="'L\\subseteq \\R^m'" :inline="true" />の基底とする．
            このとき，基底の<b>直交性欠陥</b>は，格子の体積
            <Equation :f="'\\vol{L}'" :inline="true" />を用いて
            <Equation :f="'\\od{\\bm{b}_1,\\ldots,\\bm{b}_n}:=\\frac{\\prod_{i=1}^n \\norm{\\bm{b}_i}}{\\vol{L}}'"
                :inline="false" />
            と定義される．
        </p>

        <SubSection id="od-and-good-basis">直交性欠陥と良い基底</SubSection>

        <p>
            格子の体積に関する重要な性質
            <Equation :f="'\\vol{L}\\le \\prod_{i=1}^n \\norm{\\bm{b}_i}'" :inline="false" />
            から，
            <Equation
                :f="'\\od{\\bm{b}_1,\\ldots,\\bm{b}_n}=\\frac{\\prod_{i=1}^n \\norm{\\bm{b}_i}}{\\vol{L}}\\ge \\frac{\\vol{L}}{\\vol{L}}=1'"
                :inline="false" />
            がわかり，かつ等号成立条件は全ての基底ベクトルが互いに直交することである．
            即ち，
            <Equation :f="'\\prod_{i=1}^n \\norm{\\bm{b}_i}'" :inline="true" />
            の値を小さくすること，すなわち基底の直交性欠陥を小さくすることと，基底ベクトルをほとんど直交にすることとが対応していることがわかる．
            更に，
            <Equation :f="'\\prod_{i=1}^n \\norm{\\bm{b}_i}'" :inline="true" />を小さくすることは，基底ベクトルの長さを短くすることと明らかに対応している．
            従って，直交性欠陥を小さくすることと，<b>良い基底</b>を求めることとが対応していることがわかる．
        </p>

        <SubSection id="upperbounds">代表的な簡約基底における直交性欠陥の上界</SubSection>

        <SubSubSection id="LLL">LLL簡約基底</SubSubSection>

        <Theorem :label="'命題'">
            <p>
                <Equation :f="'\\{\\bm{b}_1,\\ldots,\\bm{b}_n\\}'" :inline="true" />を<Equation :f="'n'" :inline="true" />次元格子
                <Equation :f="'L\\subseteq \\R^m'" :inline="true" />の基底とし，簡約パラメタ
                <Equation :f="'\\frac{1}{4} < \\delta <1'" :inline="true" />についてLLL簡約されているとする． このとき，
                <Equation :f="'\\alpha :=\\frac{4}{4\\delta -1}'" :inline="true" />とすると，
                <Equation :f="'\\od{\\bm{b}_1,\\ldots,\\bm{b}_n}\\le \\alpha^{\\frac{n(n-1)}{4}}'" :inline="false" />
                が成立する．
            </p>
        </Theorem>

        <Proof>
            <p>
                ここでは証明は省略するが，LLL簡約基底について
                <Equation :f="'\\prod_{i=1}^n \\norm{\\bm{b}_i}\\le \\alpha^{\\frac{n(n-1)}{4}} \\vol{L}'"
                    :inline="false" />
                が成立する．
                従って，
                <Equation
                    :f="'\\od{\\bm{b}_1,\\ldots,\\bm{b}_n}\\le\\frac{\\alpha^{\\frac{n(n-1)}{4}}\\vol{L}}{\\vol{L}}=\\alpha^{\\frac{n(n-1)}{4}}'"
                    :inline="false" />
                を得る．
            </p>
        </Proof>

        <SubSubSection id="DeepLLL">DeepLLL簡約基底</SubSubSection>

        <Theorem :label="'命題'">
            <p>
                <Equation :f="'\\{\\bm{b}_1,\\ldots,\\bm{b}_n\\}'" :inline="true" />を
                <Equation :f="'n'" :inline="true" />次元格子
                <Equation :f="'L\\subseteq \\R^m'" :inline="true" />の基底とし，簡約パラメタ
                <Equation :f="'\\frac{1}{4} < \\delta <1'" :inline="true" />についてDeepLLL簡約されているとする．
                このとき，
                <Equation :f="'\\alpha :=\\frac{4}{4\\delta -1}'" :inline="true" />とすると，
                <Equation
                    :f="'\\od{\\bm{b}_1,\\ldots,\\bm{b}_n}\\le \\left(1+\\frac{\\alpha}{4}\\right)^{\\frac{n(n-1)}{4}}'"
                    :inline="false" />
                が成立する．
            </p>
        </Theorem>

        <Proof>
            <p>
                ここでは証明は省略するが，DeepLLL簡約基底について
                <Equation
                    :f="'\\prod_{i=1}^n \\norm{\\bm{b}_i}\\le \\left(1+\\frac{\\alpha}{4}\\right)^{\\frac{n(n-1)}{4}}\\vol{L}'"
                    :inline="false" />
                が成立する．
                従って，
                <Equation
                    :f="'\\od{\\bm{b}_1,\\ldots,\\bm{b}_n}\\le \\left(1+\\frac{\\alpha}{4}\\right)^{\\frac{n(n-1)}{4}}'"
                    :inline="false" />
                を得る．
            </p>
        </Proof>
        <SubSubSection id="HKZ">HKZ簡約基底</SubSubSection>

        <Theorem :label="'命題'">
            <p>
                <Equation :f="'\\{\\bm{b}_1,\\ldots,\\bm{b}_n\\}'" :inline="true" />を
                <Equation :f="'n'" :inline="true" />次元格子
                <Equation :f="'L\\subseteq \\R^m'" :inline="true" />の基底とし，HKZ簡約されているとする．
                このとき，
                <Equation
                    :f="'\\od{\\bm{b}_1,\\ldots,\\bm{b}_n}\\le \\left(\\frac{\\gamma_n}{4}\\right)^{\\frac{n}{2}} \\sqrt{\\frac{(n+3)!}{6}}'"
                    :inline="false" />
                が成立する．
            </p>
        </Theorem>

        <Proof>
            <p>
                ここでは証明は省略するが，HKZ簡約基底について
                <Equation
                    :f="'\\prod_{i=1}^n \\norm{\\bm{b}_i}^2\\le \\left(\\gamma_n^n \\prod_{i=1}^n \\frac{i+3}{4}\\right) \\vol{L}^2'"
                    :inline="false" />
                が成立する．
                従って，
                <Equation
                    :f="'\\od{\\bm{b}_1,\\ldots,\\bm{b}_n}\\le \\left(\\frac{\\gamma_n}{4}\\right)^{\\frac{n}{2}} \\sqrt{\\frac{(n+3)!}{6}}'"
                    :inline="false" />
                を得る．
            </p>
        </Proof>

        <SubSection id="citation">参考文献</SubSection>

        <ul>
            <li>
                <Citation :author="'Murray R. Bremner'" :year="'2012'"
                    :title="'Lattice Basis Reduction An Introduction to the LLL Algorithm and Its Applications'"
                    :other="'Chapman & Hall Pure and Applied Mathematics. ISBN: 978-1439807026'" />
            </li>
            <li>
                <Citation :author="'青野良範，安田雅哉'" :year="'2019'" :title="'格子暗号解読のための数学的基礎'"
                    :other="'ISBN 978-4764905986'" />
            </li>
            <li>
                <Citation :author="'A. K. Lenstra, H. W. Lenstra, and L. Lovász'" :year="'1982'"
                    :title="'Factoring polynomials with rational coefficients'"
                    :other="'Mathematische Annalen. doi: 10.1007/BF01457454'" />
            </li>
            <li>
                <Citation :author="'Masaya Yasuda, and Junpei Yamaguchi'" :year="'2019'"
                    :title="'A new polynomial-time variant of LLL with deep insertions for decreasing the squared-sum of Gram-Schmidt lengths'"
                    :other="'Designs, Codes and Cryptography. doi: 10.1007/s10623-019-00634-9'" />
            </li>
            <li>
                <Citation :author="'Jeffrey C. Lagarias, Hendrik W. Lenstra, and Claus Peter Schnorr'" :year="'1990'"
                    :title="'Korkin-Zolotarev bases and successive minima of a lattice and its reciprocal lattice'"
                    :other="'Combinatorica. doi: 10.1007/BF02128669'" />
            </li>
        </ul>
    </WikiArticle>
</template>