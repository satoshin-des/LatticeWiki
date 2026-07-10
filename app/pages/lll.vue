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
</script>

<template>
    <WikiArticle>
        <Section>LLL基底簡約</Section>
        <p>
            <b>LLL基底簡約</b>（<b>LLL lattice basis
                reduction</b>）とは，古典的な格子基底簡約アルゴリズムの一つであり，DeepLLL基底簡約，BKZ基底簡約など多くの基底簡約アルゴリズムはLLL基底簡約の一般化として定義される．
            LLL基底簡約によって簡約された格子基底を<b>LLL簡約基底</b>などと呼ぶ．
        </p>
        <SubSection id="definition">定義</SubSection>
        <p>
            <Equation :f="'\\{\\boldsymbol{b}_1,\\ldots,\\boldsymbol{b}_n\\}'" , :inline="true" />を
            <Equation :f="'n'" , :inline="true" />次元格子
            <Equation :f="'L\\subseteq \\mathbb{R}^m'" , :inline="true" />の基底とする．
            このとき，基底が簡約パラメタ
            <Equation :f="'\\frac{1}{4} < \\delta < 1'" :inline="true" />について<b>LLL簡約</b>されているとは，
            <Equation
                :f="'\\begin{aligned}& (i) & & 1\\le \\forall j < \\forall i\\le n\\left(|\\mu_{i, j}|\\le\\frac{1}{2}\\right)\\\\ & (ii) & & 2\\le\\forall k\\le n \\left(\\delta\\cdot \\|\\boldsymbol{b}_{k-1}^\\star\\|^2\\le\\|\\pi_{k-1}(\\boldsymbol{b}_k)\\|^2\\right)\\end{aligned}'"
                :inline="false" />
            の二条件を満足するときをいう． 但し，
            <Equation
                :f="'\\left\\{\\begin{aligned}& \\pi_\\ell : \\mathbb{R}^n \\longrightarrow \\langle \\boldsymbol{b}_1, \\dots, \\boldsymbol{b}_{\\ell-1} \\rangle_\\mathbb{R}^\\perp=\\langle \\boldsymbol{b}_\\ell^\\star, \\dots, \\boldsymbol{b}_n^\\star \\rangle_\\mathbb{R}, \\\\& \\pi_\\ell(\\boldsymbol{x}) := \\sum_{i = \\ell}^n \\frac{\\langle \\boldsymbol{x}, \\boldsymbol{b}_i^\\star\\rangle}{\\|\\boldsymbol{b}_i^\\star\\|^2}\\boldsymbol{b}_i^\\star\\end{aligned}\\right.'"
                :inline="false" />
            は
            <Equation :f="'\\langle \\boldsymbol{b}_1, \\dots, \\boldsymbol{b}_{\\ell-1} \\rangle_\\mathbb{R}'" ,
                :inline="true" />
            の直交補空間への直交射影とする．
            特に条件(i)を<b>サイズ簡約条件</b>，条件(ii)を<b>Lovász条件</b>（<b>Lovász condition</b>）や<b>exchange条件</b>（<b>exchange
                condition</b>）と呼ぶ．
        </p>

        <SubSubSection id="iff-rwr">Lovász条件の同値な書き換え</SubSubSection>

        <p>
            Lovász条件は
            <Equation
                :f="'2\\le \\forall k\\le n\\left(\\|\\boldsymbol{b}_k^\\star\\|^2\\ge \\left(\\delta-\\mu_{k,k-1}^2\\right)\\|\\boldsymbol{b}_{k-1}^\\star\\|^2\\right)'"
                :inline="false" />
            と同値であることが簡単な計算からすぐに分かる．
            このことから，この条件式を<b>Lovász条件</b>と呼ぶことも少なくない．
        </p>

        <SubSection id="property">性質</SubSection>

        <SubSubSection id="upperbounds">LLL簡約基底の上界</SubSubSection>

        <Theorem :label="'定理　（Lenstra, Lenstra, and Lovász）'">
            <p>
                <Equation :f="'n'" :inline="true" />次元格子
                <Equation :f="'L'" :inline="true" />の基底
                <Equation :f="'\\{\\boldsymbol{b}_1,\\ldots,\\boldsymbol{b}_n\\}'" :inline="true" />は
                <Equation :f="'\\frac{1}{4}<\\delta<1'" :inline="true" />
                に対してLLL簡約されているとし，
                <Equation :f="'\\alpha:=\\frac{4}{4\\delta-1}'" :inline="true" />とする． このとき
                <Equation
                    :f="'\\begin{aligned}& (i) & & 1\\le \\forall j\\le \\forall i\\le n\\left(\\|\\boldsymbol{b}_j^\\star\\|^2\\le\\alpha^{i-j}\\|\\boldsymbol{b}_j^\\star\\|^2\\right)\\\\& (ii) & & \\|\\boldsymbol{b}_1\\|\\le\\alpha^{\\frac{n-1}{4}}\\mathrm{vol}{(L)}^{\\frac{1}{n}}\\\\& (iii) & & 1 \\le \\forall i\\le n\\left(\\|\\boldsymbol{b}_i\\|\\le\\alpha^\\frac{n-1}{2}\\lambda_i(L)\\right)\\\\& (iv) & & \\prod_{i=1}^n\\|\\boldsymbol{b}_i\\|\\le \\alpha^\\frac{n(n-1)}{4}\\mathrm{vol}{(L)}\\end{aligned}'"
                    :inline="false" />
                が成立する．
            </p>
        </Theorem>

        <Proof>
            <p>
                (i) 定義から，任意の
                <Equation :f="'2\\le k\\le n'" :inline="true" />に対して
                <Equation
                    :f="'\\|\\boldsymbol{b}_k^\\star\\|^2\\ge \\left(\\delta-\\mu_{k,k-1}^2\\right)\\|\\boldsymbol{b}_{k-1}^\\star\\|^2\\ge\\left(\\delta-\\frac{1}{4}\\right)\\|\\boldsymbol{b}_{k-1}^\\star\\|^2'"
                    :inline="false" />
                が成立する．
                従って任意の
                <Equation :f="'1\\le j\\le i\\le n'" :inline="true" />に対して，
                <Equation
                    :f="'\\|\\boldsymbol{b}_j^\\star\\|^2\\le\\alpha\\|\\boldsymbol{b}_{j+1}^\\star\\|^2\\le\\cdots\\le\\alpha^{i-j}\\|\\boldsymbol{b}_i^\\star\\|^2'"
                    :inline="false" />
                が成立する．<br>
                (ii) (i)より
                <Equation
                    :f="'1\\le \\forall i\\le n\\left(\\|\\boldsymbol{b}_1\\|^2\\le\\alpha^{i-1}\\|\\boldsymbol{b}_i^\\star\\|^2\\right)'"
                    :inline="false" />
                が従う．
                これを全ての
                <Equation :f="'1\\le i\\le n'" :inline="true" />で掛け合わせて
                <Equation
                    :f="'\\|\\boldsymbol{b}_1\\|^{2n}\\le\\prod_{i=1}^n\\alpha^{i-1}\\|\\boldsymbol{b}_i^\\star\\|^2=\\alpha^{\\frac{n(n-1)}{2}}\\mathrm{vol}{(L)}^2'"
                    :inline="false" />
                を得る．<br>
                (iii) (i)より，任意の
                <Equation :f="'1\\le i\\le n'" :inline="true" />に対して
                <Equation
                    :f="'\\begin{aligned}\\|\\boldsymbol{b}_i\\|^2&\\le\\|\\boldsymbol{b}_i^\\star\\|^2+\\frac{1}{4}\\sum_{j=1}^{i-1}\\norm{\\boldsymbol{b}_j^\\star}^2\\\\&\\le\\norm{\\boldsymbol{b}_i^\\star}^2+\\frac{1}{4}\\sum_{j=1}^{i-1}\\alpha^{i-j}\\norm{\\boldsymbol{b}_i^\\star}^2\\\\&=\\left\\{1+\\frac{\\alpha^i-\\alpha}{4(\\alpha-1)}\\right\\}\\norm{\\boldsymbol{b}_i^\\star}^2\\end{aligned}'"
                    :inline="false" />
                が成立する．
                他方で，定義から
                <Equation :f="'\\frac{\\alpha}{4(\\alpha-1)}\\le 1'" :inline="true" />であるので
                <Equation
                    :f="'\\frac{\\alpha^i-\\alpha}{4(\\alpha-1)}=\\frac{\\alpha(\\alpha^{i-1}-1)}{4(\\alpha-1)}\\le\\alpha^{i-1}-1'"
                    :inline="false" />
                が成立するので，
                <Equation :f="'1+\\frac{\\alpha^i-\\alpha}{4(\\alpha-1)}\\le\\alpha^{i-1}'" :inline="false" />
                であり，従って
                <Equation :f="'\\norm{\\boldsymbol{b}_i}^2\\le\\alpha^{i-1}\\norm{\\boldsymbol{b}_i^\\star}^2'"
                    :inline="false" />
                である．
                更に(i)より
                <Equation
                    :f="'\\norm{\\boldsymbol{b}_i}^2\\le\\alpha^{i-1}\\norm{\\boldsymbol{b}_i^\\star}^2\\le\\alpha^{i-1}\\alpha^{k-i}\\norm{\\boldsymbol{b}_k^\\star}^2\\le\\alpha^{n-1}\\norm{\\boldsymbol{b}_k^\\star}^2'"
                    :inline="false" />
                が任意の
                <Equation :f="'i\\le k\\le n'" :inline="true" />に対して成立する．よって
                <Equation
                    :f="'\\norm{\\boldsymbol{b}_i}\\le\\alpha^\\frac{n-1}{2}\\min\\{\\norm{\\boldsymbol{b}_i^\\star},\\ldots,\\norm{\\boldsymbol{b}_n^\\star}\\}\\le\\alpha^{\\frac{n-1}{2}}\\lambda_i(L).'"
                    :inline="false" />
                <br>
                (iv)
                先に登場した式
                <Equation :f="'\\norm{\\boldsymbol{b}_i}^2\\le\\alpha^{i-1}\\norm{\\boldsymbol{b}_i^\\star}^2'"
                    :inline="true" />を全ての
                <Equation :f="'1\\le i\\le n'" :inline="true" />で掛け合わせて
                <Equation
                    :f="'\\prod_{i=1}^n\\norm{\\boldsymbol{b}_i}^2\\le\\left(\\prod_{i=1}^n\\alpha^{i-1}\\right)\\mathrm{vol}{(L)}^2=\\alpha^{\\frac{n(n-1)}{2}}\\mathrm{vol}(L)^2'"
                    :inline="false" />
                を得る．
            </p>
        </Proof>

        <SubSubSection id="od-upperbounds">直交性欠陥の上界</SubSubSection>

        基底の<a href="orthogonality-defect.html" class="wiki-term" data-desc="格子基底の品質を表す指標の一つ．">直交性欠陥</a>は，格子の<a
            href="volume.html" class="wiki-term" data-desc="格子の不変量の一つ．">体積</a>
        <Equation :f="'\\mathrm{vol}{(L)}'" :inline="true" />を用いて
        <Equation
            :f="'\\od{\\boldsymbol{b}_1,\\ldots,\\boldsymbol{b}_n}:=\\frac{\\prod_{i=1}^n \\norm{\\boldsymbol{b}_i}}{\\mathrm{vol}{(L)}}'"
            :inline="false" />
        と定義される量であった．

        <Theorem :label="'命題'">
            <p>
                <Equation :f="'\\{\\boldsymbol{b}_1,\\ldots,\\boldsymbol{b}_n\\}'" :inline="true" />を
                <Equation :f="'n'" :inline="true" />次元格子
                <Equation :f="'L\\subseteq \\mathbb{R}^m'" :inline="true" />の基底とし，簡約パラメタ
                <Equation :f="'\\frac{1}{4} < \\delta <1'" :inline="true" />についてLLL簡約されているとする．このとき，
                <Equation :f="'\\alpha:=\\frac{4}{4\\delta -1}'" :inline="false" />とすると，
                <Equation :f="'\\od{\\boldsymbol{b}_1,\\ldots,\\boldsymbol{b}_n}\\le \\alpha^{\\frac{n(n-1)}{4}}'"
                    :inline="false" />
                が成立する．
            </p>
        </Theorem>
        <Proof>
            <p>
                Lenstra-Lenstra-Lovászの定理<sup id="cite_ref-1" class="reference"><a href="#ref-1">[1]</a></sup>から
                <Equation
                    :f="'\\od{\\boldsymbol{b}_1,\\ldots,\\boldsymbol{b}_n}\\le\\frac{\\alpha^{\\frac{n(n-1)}{4}}\\mathrm{vol}{(L)}}{\\mathrm{vol}{(L)}}=\\alpha^{\\frac{n(n-1)}{4}}'"
                    :inline="false" />
                を得る．
            </p>
        </Proof>

        <SubSection id="algorithm">LLL基底簡約アルゴリズム</SubSection>

        <Algorithm :caption="'アルゴリズム 1: LLL基底簡約アルゴリズム'" :label="'LLL'">
            bs[1], ..., bs[n], mu <- <span class="fn">gram_schmidt</span>(b)<br>
                k <- 2 <span class="kw">while</span> k <= n <span class="kw">do</span><br>
                        <span class="kw">for</span> j = 1 to k - 1 <span class="kw">do</span><br>
                        <span class="kw">if</span> <span class="fn">abs</span>(mu[k, j]) > 0.5 <span
                            class="kw">then</span><br>
                        b[k] <- b[k] - <span class="fn">round</span>(mu[k, j]) * b[j]<br>
                            Updates GSO<br>
                            <span class="kw">end if</span>
                            <span class="kw">end for</span>
                            <span class="kw">if</span> k > 0 and <span class="fn">norm</span>(bs[k])^2 < (delta - mu[k,
                                k-1]^2) * <span class="fn">norm</span>(bs[k-1])^2 <span class="kw">then</span>
                                swap b[k] and b[k - 1]
                                Updates GSO
                                k <- k - 1 <span class="kw">else</span>
                                    k <- k + 1 <span class="kw">end if</span>
                                        <span class="kw">end while</span>
                                        <span class="kw">return</span> b
        </Algorithm>

        <SubSection id="implementation">実装</SubSection>

        LLL基底簡約アルゴリズムは，例えば以下の言語，ソフトウェア，ライブラリで実装されている．
        尚，以下のリストは飽くまで一例であり，全ての実装を一覧しているわけではないことに注意されたい．

        <SubSubSection>言語での実装</SubSubSection>

        <ul>
            <li><a href="https://pari.math.u-bordeaux.fr">PARI/GP</a>：<code>qflll</code>函数によりLLL簡約を行うことができる．</li>
            <li><a href="https://www.sagemath.org">SageMath</a>：<code>LLL</code>メソッドを呼び出すことでLLL簡約をすることができる．</li>
        </ul>

        <SubSubSection>ソフトウェアでの実装</SubSubSection>

        <ul>
            <li><a href="https://magma.maths.usyd.edu.au/magma/">Magma</a>：<code>LLL</code>函数によりLLL簡約を行うことができる．</li>
            <li><a href="https://github.com/satoshin-des/LatBlue">LatBlue</a>：<code>LLL</code>によりLLL簡約を行うことができる．</li>
        </ul>

        <SubSubSection>ライブラリでの実装</SubSubSection>

        <ul>
            <li><a href="https://github.com/fplll/fplll">fplll</a></li>
            <li><a href="https://github.com/satoshin-des/glatl">glatl</a>：<code>LLL</code>函数によりLLL簡約を行うことができる．</li>
            <li><a
                    href="https://github.com/satoshin-des/liblat">liblat</a>：<code>LLL</code>函数，及び<code>L2</code>函数によりLLL簡約を行うことができる．
            </li>
            <li><a
                    href="https://github.com/libntl/ntl">NTL</a>：<code>LLL</code>，<code>LLL_FP</code>，<code>LLL_QQ</code>などの函数によりLLL簡約を行うことができる．
            </li>
            <li><a href="https://github.com/orisano/olll">olll</a>：<code>reduction</code>函数によりLLL簡約を行うことができる．</li>
        </ul>

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
                <Citation :author="'Ralph Bottesch, Max W. Haslbeck, and René Thiemann'" :year="'2018'"
                    :title="'A verified efficient implementation of the LLL basis reduction algorithm'"
                    :other="'LPAR-22. doi: 10.29007/xwwh'" />
            </li>
        </ul>

        <!--

        <div class="algorithm-box">
            <span class="algorithm-caption">アルゴリズム 1: LLL基底簡約アルゴリズム
                <sup id="cite_ref-2" class="reference">
                    <a href="#ref-2">[2]</a>
                </sup>
                <sup id="cite_ref-3" class="reference">
                    <a href="#ref-3">[3]</a>
                </sup>
            </span>
            <code>
<span class="kw">Input:</span> 基底 b=[b[1],..., b[n]], 簡約パラメタ delta
<span class="kw">Output:</span> LLL簡約基底 b

<span class="kw">function</span> <span class="fn">LLL</span>(b, delta)
    bs[1], ..., bs[n], mu <- <span class="fn">gram_schmidt</span>(b)
    k <- 2
    <span class="kw">while</span> k <= n <span class="kw">do</span>
        <span class="kw">for</span> j = 1 to k - 1 <span class="kw">do</span>
            <span class="kw">if</span> <span class="fn">abs</span>(mu[k, j]) > 0.5 <span class="kw">then</span>
                b[k] <- b[k] - <span class="fn">round</span>(mu[k, j]) * b[j]
                Updates GSO
            <span class="kw">end if</span>
        <span class="kw">end for</span>
        <span class="kw">if</span> k > 0 and <span class="fn">norm</span>(bs[k])^2 < (delta - mu[k, k-1]^2) * <span class="fn">norm</span>(bs[k-1])^2 <span class="kw">then</span>
            swap b[k] and b[k - 1]
            Updates GSO
            k <- k - 1
        <span class="kw">else</span>
            k <- k + 1
        <span class="kw">end if</span>
    <span class="kw">end while</span>
    <span class="kw">return</span> b
<span class="kw">end function</span>
    </code>
        </div>
        -->
    </WikiArticle>
</template>