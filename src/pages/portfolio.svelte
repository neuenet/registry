<script lang="ts">
  /// util
  import { default as Portfolio } from "~util/portfolio.json";

  type NameType = {
    ascii: string;
    mature: boolean;
    name: string;
    translation?: string;
  };

  /// variable
  const names = [];
  const namesMature = [];
  const portfolio: [NameType] = Portfolio;

  /// function
  function generateContent() {
    for (const tld of portfolio) {
      if (tld.mature)
        namesMature.push(tld);
      else
        names.push(tld);
    }
  }

  generateContent();
</script>

<style lang="scss">
  details {
    columns: 6 auto;

    summary {
      cursor: pointer;
      height: 24px;
      letter-spacing: 0.1rem;
      line-height: calc(var(--line-height) * 1.15);
      margin-bottom: calc(var(--baseline) * 2);
      text-transform: uppercase;
    }
  }

  .header {
    margin-top: calc(var(--baseline) * 3);

    @media (min-width: 701px) {
      margin-bottom: calc(var(--baseline) * 2);
    }

    @media (max-width: 700px) {
      padding-right: calc(var(--line-height) * 2);
      padding-left: calc(var(--line-height) * 2);

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

  .name {
    display: flex;
    flex-direction: column;
    line-height: calc(var(--line-height) * 1.15);
    margin-bottom: calc(var(--baseline) * 2);

    strong {
      font-size: 1.4rem;
    }
  }

  .mature-names,
  .names {
    @media (max-width: 700px) {
      padding-right: calc(var(--line-height) * 2);
      padding-left: calc(var(--line-height) * 2);
    }
  }

  .columns {
    @media (min-width: 1401px) {
      columns: 6 auto;
    }

    @media (min-width: 1201px) and (max-width: 1400px) {
      columns: 5 auto;
    }

    @media (min-width: 1001px) and (max-width: 1200px) {
      columns: 4 auto;
    }

    @media (min-width: 701px) and (max-width: 1000px) {
      columns: 3 auto;
    }

    @media (min-width: 601px) and (max-width: 700px) {
      columns: 2 auto;
    }

    @media (max-width: 600px) {
      columns: 1 auto;
    }
  }

  .names {
    margin-top: 2rem;
  }
</style>

<u-grid columns="8">
  <u-cell class="header" span="row">
    <h1>The Internet is wide&nbsp;and&nbsp;varied</h1>
    <h2>We developed our portfolio with this in&nbsp;mind.<br/>Everyone is unique, so let's enable a wider range of expression.</h2>
  </u-cell>

  <hr/>

  <u-cell class="columns names" span="row">
    {#each names as name}
      <span class="name">
        <strong>{name.name}</strong>
        {name.name !== name.ascii ? name.ascii : ""}

        {#if name.translation}
          <em>{name.translation}</em>
        {/if}
      </span>
    {/each}
  </u-cell>

  <u-cell class="mature-names" span="row">
    <hr/>
    <h3>Mature Extensions</h3>

    <details class="columns">
      <summary>View the list</summary>

      {#each namesMature as name}
        <span class="name">
          <strong>{name.name}</strong>
          {name.name !== name.ascii ? name.ascii : ""}
        </span>
      {/each}
    </details>
  </u-cell>
</u-grid>
