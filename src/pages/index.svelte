<script lang="ts">
  /// variable
  let y: number;
</script>

<style lang="scss">
  @import "sass/utilities/mixins";

  p a {
    font-weight: 600;
    text-decoration: underline;
  }

  u-grid {
    &:first-of-type {
      height: calc(100vh - calc(var(--line-height) * 2));
      pointer-events: none;
      position: relative;
      z-index: -1;
    }

    &:last-of-type {
      margin-bottom: calc(var(--line-height) * -2.5); /// for the footer
    }
  }

  .billboard {
    background-position: center;
    width: 100%;

    @media (min-width: 701px) {
      height: 300px;
    }

    @media (max-width: 700px) {
      height: 100vh;
      transform: rotate(90deg) translateX(-1rem);
    }
  }

  .section-intro {
    u-cell {
      @include center;

      width: 100%; height: 100%;
      top: 0; left: 0;

      position: fixed;
      z-index: 1;
    }
  }

  .section-links {
    background-color: var(--inc-gray-1);

    @media(prefers-color-scheme: dark) {
      background-color: var(--inc-gray-9);
      color: var(--inc-gray-0);
    }

    @media (min-width: 701px) {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }

    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      padding: calc(var(--line-height) * 2);
    }
  }

  .section-who {
    background-color: var(--inc-black);
    color: var(--inc-white);
    font-size: 4rem;
    line-height: 1.33;
    min-height: 100vh;
    position: relative;
    z-index: 2;

    @media (min-width: 801px) and (max-width: 1000px) {
      font-size: 3rem;
    }

    @media (min-width: 701px) {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }

    @media (min-width: 501px) and (max-width: 800px) {
      font-size: 2rem;
    }

    @media (max-width: 700px) {
      padding-top: calc(var(--line-height) * 2);
      padding-bottom: calc(var(--line-height) * 2);
    }

    @media (max-width: 500px) {
      font-size: 1.75rem;
    }

    u-cell {
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (min-width: 701px) and (max-width: 1420px) {
        --grid-ce: 10;
        --grid-cs: 2;
      }

      @media (max-width: 700px) {
        --grid-ce: 11;
        --grid-cs: 1;
        padding-right: calc(var(--line-height) * 2);
        padding-left: calc(var(--line-height) * 2);
      }
    }

    video {
      width: 100%; height: 100%;

      object-fit: cover;
      object-position: center;
      opacity: 0.5;
      position: absolute;
      z-index: -1;
    }

    .scroll-indicator {
      width: 100%; height: 3rem;
      top: 0; left: 0;

      color: var(--inc-black);
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0.2rem;
      opacity: 1;
      position: absolute;
      text-align: center;
      text-transform: uppercase;
      transition: opacity 0.25s;
      z-index: -1;

      @media(prefers-color-scheme: dark) {
        color: var(--inc-gray-0);
      }

      @media (min-width: 701px) {
        transform: translateY(-3rem);
      }

      @media (max-width: 700px) {
        transform: translateY(-8rem);
      }
    }
  }
</style>

<svelte:window bind:scrollY={y}/>

<u-grid class="section-intro" columns="12">
  <u-cell span="row">
    <h1 class="neuenet-logo billboard" style="filter: blur({y / 50}px);">Neuenet/</h1>
  </u-cell>
</u-grid>

<u-grid class="section-who" columns="10">
  <u-cell class="scroll-indicator" span="row" style="opacity: {y > 100 ? 0 : 1}">
    <p>scroll</p>
  </u-cell>

  <u-cell span="3-8">
    <p>Neuenet is a registry operating in the <a href="http://handshake/" title="dLink for Handshake" rel="external noopener noreferrer" target="_blank">Handshake</a>&nbsp;namespace.</p>
    <p>As a Director&nbsp;of&nbsp;Handshake we are committed to help steward the protocol, develop and release tools, and provide services for the New&nbsp;Internet.</p>
  </u-cell>

  <video autoplay muted loop playsinline poster="/media/image/poster.jpg">
    <source src="/media/video/water.webm" type="video/webm"/>
  </video>
</u-grid>

<u-grid class="section-links" columns="11">
  <u-cell span="2-4">
    <h3>Portfolio</h3>
    <p>Our portfolio is full of names we wished we could register on legacy DNS.</p>
    <p><a href="/portfolio" title="Check out our portfolio">Check 'em out</a></p>
  </u-cell>

  <u-cell span="5-7">
    <h3>Brands</h3>
    <p>We have names better suited for vertical integration than public domain registration.</p>
    <p><a href="/brands" title="Peruse our collection of brands">Peruse the collection</a></p>
  </u-cell>

  <u-cell span="8-10">
    <h3>Partners</h3>
    <p>Interested in offering our names on your registrar? Collaborations make the world go 'round.</p>
    <p><a href="/partners" title="Get in touch about becoming a partner">Get in touch</a></p>
  </u-cell>

  <!--/
  NOTE: These pages will be created later

  <u-cell span="2-4">
    <h3>Tools</h3>
    <p>Inspired to do something more with your names? We have a suite of software to help you do just that.</p>
    <p><a href="/tools" title="Learn more about our tools">Learn more</a></p>
  </u-cell>

  <u-cell span="5-7">
    <h3>Announcements</h3>
    <p>Exciting developments and pithy commentary are the name of the game here.</p>
    <p><a href="/announcements" title="Read more about our announcements">Read more</a></p>
  </u-cell>

  <u-cell span="8-10">
    <h3>FAQ</h3>
    <p>a/k/a "things people probably want to know so just explain it in one place."</p>
    <p><a href="/faq" title="Dive into our FAQ">Dive in</a></p>
  </u-cell>
  /-->
</u-grid>
