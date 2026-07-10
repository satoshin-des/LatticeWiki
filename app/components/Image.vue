<script setup>
defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    }
});
</script>

<template>
    <figure class="wiki-image-block">
        <img :src="`${src}`" :alt="`${alt}`">

        <figcaption>
            {{ caption }}
        </figcaption>
    </figure>
</template>

<style lang="css">
/* 画像ブロックのコンテナ (figure) */
.wiki-image-block {
    /* ブロック要素として扱い、上下に余白、左右は中央寄せ */
    display: block;
    margin: 2.5rem auto;

    /* 重要：コンテナの幅を中身（画像）の幅に合わせる */
    width: fit-content;

    /* Wikipedia風のサムネイル装飾 */
    border: 1px solid #c8ccd1;
    /* 薄いグレーの枠線 */
    background-color: #f8f9fa;
    /* 薄いグレーの背景色 */
    padding: 6px;
    /* 枠と画像の間の隙間 */

    /* レスポンシブ対応：画面幅が狭いときに幅からはみ出さないように */
    max-width: 98%;
    box-sizing: border-box;
    /* paddingを含めた幅計算にする */
}

/* 画像本体 (img) */
.wiki-image-block img {
    display: block;
    /* 画像の下にできる微妙な隙間を消す */
    max-width: 100%;
    /* 親要素（figure）の幅を超えないようにする */
    height: auto;
    /* アスペクト比（縦横比）を維持する */
    border: 1px solid #e0e0e0;
    /* 画像自体にもごく薄い枠線を付ける */
}

/* キャプション (figcaption) */
.wiki-image-block figcaption {
    margin-top: 8px;
    /* 画像との間隔 */
    font-size: 0.9em;
    /* 本文より少し小さく */
    line-height: 1.4;
    color: #54595d;
    /* 真っ黒ではない読みやすいグレー */
    text-align: left;
    /* キャプションは左寄せがWikipedia標準 */
    word-wrap: break-word;
    /* 長い単語でのレイアウト崩れ防止 */
}
</style>