<script setup lang="ts">
import Section from '~/components/Section.vue';
import SubSection from '~/components/SubSection.vue';
import Equation from '~/components/Equation.vue';
import WikiArticle from '~/components/WikiArticle.vue';
import Citation from '~/components/Citation.vue';
</script>

<template>
    <WikiArticle>
        <Section>deep-insertion</Section>
        <p>
            <b>deep-insertion</b>とは，基底を入れ替える操作の一つである．
        </p>

        <SubSection id="definition">定義</SubSection>
        <p>
            <Equation :f="'\\mathscr{B}'" :inline="true" />を
            <Equation :f="'n'" :inline="true" />次元格子
            <Equation :f="'L'" :inline="true" />の基底全体の集合とする．
            このとき，インデックス
            <Equation :f="'1\\le i<k \\le n'" :inline="true" />に対して，<b>deep-insertion</b>
            <Equation :f="'\\sigma_{i, k}'" :inline="true" />は
            <Equation
                :f="'\\begin{array}{ccccc}\\sigma_{i, k} & : & \\mathscr{B} & \\to & \\mathscr{B}\\\\ & & \\rotin & & \\rotin\\\\ & & \\{\\bm{b}_1,\\ldots,\\bm{b}_n\\} & \\mapsto & \\{\\bm{b}_1,\\ldots,\\bm{b}_{i-1},\\bm{b}_k,\\bm{b}_i,\\ldots,\\bm{b}_{k-1}, \\bm{b}_{k+1},\\ldots,\\bm{b}_n\\}\\end{array}'"
                :inline="false" />
            と定義される．
        </p>

        <SubSection id="gso-change">deep-insertionによるGSOの変化</SubSection>

        <div class="math-block theorem">
            <span class="math-label">定理（山口，安田
                <sup id="cite_ref-1" class="reference">
                    <a href="#ref-1">[1]</a>
                </sup>
                ）</span>
            <p>
                <Equation :f="'\\bm{B}:=\\{\\bm{b}_1,\\ldots,\\bm{b}_n\\}'" :inline="true" />を
                <Equation :f="'n'" :inline="true" />次元格子
                <Equation :f="'L'" :inline="true" />の基底とし，
                <Equation :f="'(1\\le i<k\\le n)'" :inline="true" />に対して
                <Equation :f="'\\bm{C}:=\\sigma_{i,k}(\\bm{B})'" :inline="true" />とおく．
                更に，
                <Equation :f="'\\bm{B}'" :inline="true" />のGSOベクトルの二乗ノルムを
                <Equation :f="'B_i=\\norm{\\bm{b}_i^\\star}^2'" :inline="true" />，GSO係数行列を
                <Equation :f="'\\mu_{i,j})_{1\\le i, j\\le n}'" :inline="true" />，また
                <Equation :f="'\\bm{C}'" :inline="true" />のGSOベクトルの二乗ノルムを
                <Equation :f="'C_i=\\norm{\\bm{c}_i^\\star}^2'" :inline="true" />，GSO係数行列を
                <Equation :f="'(\\nu_{i,j})_{1\\le i, j\\le n}'" :inline="true" />とおく．
                このとき，
                <Equation :f="'D_\\ell:=\\norm{\\pi_\\ell(\\boldsymbol{b}_k)}^2'" :inline="true" />として
                <Equation
                    :f="'C_j=\\left\\{\\!\\!\\!\\!\\!\\!\\begin{array}{ll} & D_i & \\text{if}~j=i\\\\ & \\displaystyle\\frac{D_jB_{j-1}}{D_{j-1}} &\\text{if}~i+1\\le j\\le k\\\\ & B_j & \\text{else} \\end{array} \\right.'"
                    :inline="false" />
                <Equation
                    :f="'\\nu_{\\ell, j}=\\left\\{\\!\\!\\!\\!\\!\\!\\begin{array}{lll} &\\displaystyle\\mu_{\\ell-1, j-1}-\\frac{\\mu_{k,j-1}}{D_j}\\sum_{h=j}^{\\ell-1}\\mu_{k, h}\\mu_{\\ell-1, h}B_h & \\text{if}~i+1\\le j\\le k,~j+1\\le \\ell\\le k\\\\ &\\displaystyle \\mu_{\\ell, j-1}-\\frac{\\mu_{k, j-1}}{D_j}\\sum_{h=j}^k \\mu_{k, h}\\mu_{\\ell, h}B_h &\\text{if}~i+1\\le j\\le k,~k+1\\le \\ell \\le n\\\\ &\\displaystyle \\frac{1}{D_i}\\sum_{h=i}^{\\ell-1}\\mu_{k,h}\\mu_{\\ell-1, h}B_h & \\text{if}~j=i,~i+1\\le \\ell \\le k\\\\ & \\displaystyle\\frac{1}{D_i}\\sum_{h=i}^{k}\\mu_{k, h}\\mu_{\\ell, h}B_h & \\text{if}~j=i,~k+1\\le \\ell\\le n\\\\ & \\mu_{k,j} & \\text{if}~\\ell=i,~1\\le j\\le i-1\\\\ & \\mu_{\\ell-1, j} & \\text{if}~i+1\\le \\ell\\le k,~1\\le j\\le i-1\\\\ & \\mu_{\\ell, j} & \\text{else} \\end{array} \\right. '"
                    :inline="false" />
                が成立する．
            </p>
        </div>

        <section class="wiki-references-section">
            <SubSection id="reference">出典</SubSection>
            <ol class="wiki-references-list">
                <li id="ref-1">
                    <span class="reference-text">
                        山口，安田 2017
                    </span>
                    <a href="#cite_ref-1" class="back-to-text" title="本文に戻る">^</a>
                </li>
            </ol>
        </section>

        <SubSection id="citation">参考文献</SubSection>

        <ul>
            <li>
                <Citation :author="'Murray R. Bremner'"
                    :title="'Lattice Basis Reduction An Introduction to the LLL Algorithm and Its Applications'"
                    :year="'2012'" :other="'Chapman & Hall Pure and Applied Mathematics. ISBN: 978-1439807026'" />
            </li>
            <li>
                <Citation :author="'青野良範，安田雅哉'" :title="'格子暗号解読のための数学的基礎'" :year="'2019'"
                    :other="'ISBN 978-4764905986'" />
            </li>
            <li>
                <Citation :author="'山口純平，安田雅哉'" :title="'DeepLLLにおけるグラムシュミットベクトル更新の高速化'" :year="'2017'"
                    :other="'SCIS2017'" />
            </li>
        </ul>
    </WikiArticle>
</template>