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
        <Section>幾何級数仮定</Section>
        <p>
            <b>幾何級数仮定</b>（<b>geometory series assumption</b>,
            <b>GSA</b>）とは，簡約された格子基底が実験的に，且つ近似的に満足する性質で，計算の簡素化やシミュレーションなどの際に仮定される．
            実際，実験してみるとおおよそその性質を満足するが，数学的に正しい主張ではなく，仮定であることに注意されたい．
            また，本によっては，これを定義や命題などのように紹介するものもあるが，それは用語の濫用，もしくは誤解を招く表現である．
        </p>

        <SubSection id="definition">概要</SubSection>
        <p>
            <Equation :f="'\\{\\bm{b}_1,\\ldots,\\bm{b}_n\\}'" :inline="true" />を
            <Equation :f="'n'" :inline="true" />次元格子
            <Equation :f="'L\\subseteq \\mathbb{R}^m'" :inline="true" />の基底とする．
            更に，基底のGSOベクトルを
            <Equation :f="'\\bm{b}_1^\\star,\\ldots, \\bm{b}_n^\\star'" :inline="true" />とする．
            このとき，<b>幾何級数仮定</b>，もしくは単に<b>GSA</b>は，簡約された格子基底に対して次を仮定する<sup id="cite_ref-1" class="reference">
                <a href="#ref-1">[1]</a>
            </sup>：
            <Equation
                :f="'\\frac{3}{4}\\le {}^\\exists q< 1~\\text{s.t.} ~1\\le {}^\\forall i\\le n,~\\norm{\\bm{b}_{i}^\\star}^2\\approx q^{i-1}\\norm{\\bm{b}_1}^2'"
                :inline="false" />
            また，基底に依存する実数
            <Equation :f="'\\frac{3}{4}\\le q < 1'" :inline="true" />を<b>幾何級数仮定定数</b>，もしくは単に<b>GSA定数</b>と呼ぶ．
        </p>
        <p>
            また，GSAの式の両辺の対数を取ることによって
            <Equation :f="'\\log \\frac{\\norm{\\bm{b}_{i}^\\star}^2}{\\norm{\\bm{b}_1}^2}\\approx (i-1)\\log q'"
                :inline="false" />
            という式が得られる．
            これは即ち，簡約された基底に対して，
            <Equation :f="'\\log \\frac{\\norm{\\bm{b}_{i}^\\star}^2}{\norm{\\bm{b}_1}^2}'" :inline="true" />がおよそ傾き
            <Equation :f="'\\log q\\ (< 0)'" :inline="true" />，切片0の直線になることを主張している． そのため，横軸がインデックスにとったときの
            <Equation :f="'\\log \\frac{\\norm{\\bm{b}_{i}^\\star}^2}{\\norm{\\bm{b}_1}^2}'" :inline="true" />
            のグラフなどを<b>GSAスロープ</b>やGSAと呼ぶこともある．
        </p>

        <SubSection id="verification">実験による仮定の検証</SubSection>

        <h3 id="before">簡約を施す前</h3>

        <Image :src="'raw_slope.png'" :alt="'簡約を施す前のGSAと，その近似直線'" :caption="'簡約を施す前のGSAと，その近似直線'" />

        <h3 id="lll">LLL簡約基底</h3>

        <Image :src="'lll_slope.png'" :alt="'LLL簡約基底のGSAと，その近似直線'" :caption="'LLL簡約基底のGSAと，その近似直線'" />

        <h3 id="bkz">BKZ簡約基底</h3>

        <Image :src="'bkz_slope_40.png'" :alt="'BKZ簡約基底のGSAと，その近似直線'" :caption="'BKZ簡約基底のGSAと，その近似直線'" />

        <section class="wiki-references-section">
            <SubSection id="reference">出典</SubSection>
            <ol class="wiki-references-list">
                <li id="ref-1">
                    <span class="reference-text">
                        Schnorr 2003.
                    </span>
                    <a href="#cite_ref-1" class="back-to-text" title="本文に戻る">^</a>
                </li>
            </ol>
        </section>

        <SubSection id="citation">参考文献</SubSection>

        <ul>
            <li>
                <Citation :title="'格子暗号解読のための数学的基礎'" :author="'青野良範，安田雅哉'" :year="'2019'"
                    :other="'ISBN 978-4764905986'" />
            </li>
            <li>
                <Citation :title="'Lattice reduction by random sampling and birthday methods'"
                    :author="'Claus Peter Schnorr'" :year="'2003'"
                    :other="'Symposium on Theoretical Aspects of Computer Science (STACS2003). doi: 10.1007/3-540-36494-3_14'" />
            </li>
        </ul>
    </WikiArticle>
</template>