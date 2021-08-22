<script lang="ts"></script>

<style lang="scss">
  @import "sass/utilities/mixins";

  u-grid {
    @media (max-width: 700px) {
      padding-right: calc(var(--line-height) * 2);
      padding-left: calc(var(--line-height) * 2);
    }
  }

  .header {
    margin-top: calc(var(--baseline) * 3);

    @media (min-width: 701px) {
      margin-bottom: calc(var(--baseline) * 2);
    }

    @media (max-width: 700px) {
      h1 {
        font-size: var(--h2-size);
        line-height: calc(var(--line-height) * 1.75);
      }

      h2 {
        font-size: var(--h3-size);
        line-height: calc(var(--line-height) * 1.5);
      }
    }
  }

  .partner {
    @media (max-width: 700px) {
      --grid-ce: 9;
      --grid-cs: 1;
    }

    a {
      @include center;
      width: 100%; height: 150px;
    }

    &.beachfront {
      background-color: #ffd43b;
      pointer-events: none; ///> temporary, site does not yet exist

      img {
        width: 80%; height: 75px;
      }
    }
  }
</style>

<u-grid columns="8">
  <u-cell class="header" span="row">
    <h1>The New Internet is collaborative</h1>
    <h2>We want partners who create opportunity and growth.<br/>Allow us to help empower your customers.</h2>
  </u-cell>

  <u-cell span="row">
    <p>Full disclosure: beachfront/ is our registrar, but we don't want everything to ourselves!</p>
    <p>Please reach out if you're interested in selling domains on our extensions and creating new experiences.</p>
  </u-cell>

  <hr/>

  <u-cell class="partner beachfront" span="1-4">
    <a href="https://app.beachfront/" rel="external noopener noreferrer" title="beachfront/ — the neue registrar">
      <img alt="beachfront/ logo" src="/media/svg/beachfront-wordmark.svg"/>
    </a>
  </u-cell>
</u-grid>
