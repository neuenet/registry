<script lang="ts">
  /// import
  import { page } from "$app/stores";

  /// function
  $: isActive = (suppliedPath: string) => {
    if ($page.url.pathname === `/${suppliedPath}`)
      return true;
    else
      return false;
  }
</script>

<style lang="scss">
  a {
    display: block;

    &.active {
      color: var(--inc-pink-4);
      text-decoration-color: inherit;
    }
  }

  u-grid {
    background-color: var(--inc-gray-1);
    border-top: 2px solid var(--inc-black);
    grid-area: footer;
    margin-top: calc(var(--line-height) * 2.5);
    padding-top: calc(var(--line-height) * 2);
    padding-bottom: calc(var(--line-height) * 2);
    position: relative;

    @media(prefers-color-scheme: dark) {
      background-color: var(--inc-gray-9);
      border-top-color: var(--inc-gray-8);
      color: var(--inc-gray-0);
    }

    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      padding-right: calc(var(--line-height) * 2);
      padding-left: calc(var(--line-height) * 2);
    }
  }

  .links {
    font-size: 1.25rem;
    font-weight: 600;

    @media (min-width: 701px) {
      align-items: center;
      justify-content: flex-end;
    }

    @media (max-width: 700px) {
      flex-direction: column;
    }

    a:not(:last-of-type) {
      @media (min-width: 701px) {
        margin-right: 2rem;
      }

      @media (max-width: 700px) {
        margin-bottom: 1rem;
      }
    }
  }

  .neuenet-logo {
    width: 13rem; height: 3rem;
    background-position: -8px center;
  }
</style>

<u-grid columns="12">
  <u-cell flex-column span="1-2">
    <a href="/" class="neuenet-logo" title="Look at our pretty homepage">Neuenet/</a>
  </u-cell>

  <u-cell class="links" flex span="3-12">
    <a class:active={isActive("portfolio")} href="/portfolio" title="Check out our portfolio">Portfolio</a>
    <a class:active={isActive("brands")} href="/brands" title="Peruse our collection of brands">Brands</a>
    <a class:active={isActive("partners")} href="/partners" title="Get in touch about becoming a partner">Partners</a>

    <!--/
    NOTE: These pages will be created later

    <a class:active={isActive("tools")} href="/tools" title="Learn more about our tools">Tools</a>
    <a class:active={isActive("announcments")} href="/announcements" title="Read more about our announcements">Announcements</a>
    <a class:active={isActive("faq")} href="/faq" title="Dive into our FAQ">FAQ</a>
    /-->
  </u-cell>
</u-grid>
