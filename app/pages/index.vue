<script setup lang="ts">
import Section from '~/components/Section.vue';
import SubSection from '~/components/SubSection.vue';
</script>

<template>
    <Section>格子Wikiへようこそ</Section>
    <SubSection>これは何？</SubSection>
    <p>
        格子Wikiは，格子や格子基底簡約に関する数学的な道具，並びにその性質や重要な命題，されにその証明をWiki的に検索，横断できるサイトです．
        まだまだ発展途上なサイトですが，格子に関することならなんでも揃う，素晴らしいサイト目指して頑張って編纂していきます．
    </p>

    <SubSection>記事一覧（五十音順）</SubSection>

    <ul>
        <li><NuxtLink to="/gsa">幾何級数仮定</NuxtLink></li>
        <li><a href="volume.html">体積</a></li>
        <li><a href="orthogonality-defect.html">直交性欠陥</a></li>
        <li><a href="potential.html">ポテンシャル</a></li>
        <li><NuxtLink to="/deep-insertion">deep-insertion</NuxtLink></li>
        <li><a href="deeplll.html">DeepLLL基底簡約</a></li>
        <li><a href="hermite-const.html">Hermiteの定数</a></li>
        <li><NuxtLink to="/lll">LLL基底簡約</NuxtLink></li>
        <li><a href="potlll.html">PotLLL基底簡約</a></li>
    </ul>
</template>