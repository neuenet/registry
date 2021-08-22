<script lang="ts">
  /// util
  import { default as Brands } from "~util/brands.json";
  import { default as BrandsReserved } from "~util/brands-reserved.json";
  import { default as Reserved } from "~util/reserved.json";

  type NameType = {
    ascii: string;
    mature: boolean;
    name: string;
    translation?: string;
  };

  /// variable
  const brands: [NameType] = Brands;
  const brandsReserved: [NameType] = BrandsReserved;
  const reserved: [NameType] = Reserved;
</script>

<style lang="scss">
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

  .names {
    margin-top: 2rem;
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
</style>

<u-grid columns="8">
  <u-cell class="header" span="row">
    <h1>Identity is integral to brand success</h1>
    <h2>Our selection of brand names could be perfect for your venture.<br/>Interested in acquisition? Reach out.</h2>
  </u-cell>

  <hr/>

  <u-cell class="columns names" span="row">
    {#each brands as name}
      <span class="name">
        <strong>{name.name}</strong>
        {name.name !== name.ascii ? name.ascii : ""}

        {#if name.translation}
          <em>{name.translation}</em>
        {/if}
      </span>
    {/each}
  </u-cell>

  <u-cell span="row">
    <hr/>

    <h3>Reserved brands</h3>
    <p>These extensions have been acquired for the purpose of gifting, free of charge.<br/>Being an early adopter is great. Squatting? Not&nbsp;so&nbsp;much.</p>

    <div class="columns names">
      {#each brandsReserved as name}
        <span class="name">
          <strong>{name.name}</strong>
          {name.name !== name.ascii ? name.ascii : ""}

          {#if name.translation}
            <em>{name.translation}</em>
          {/if}
        </span>
      {/each}
    </div>
  </u-cell>

  <u-cell span="row">
    <hr/>

    <h3>Private brands</h3>
    <p>Aside from Neuenet/, we have a number of other great ideas to work on.<br/>However, depending on your use case/financials, an exchange could be negotiated.</p>

    <div class="columns names">
      {#each reserved as name}
        <span class="name">
          <strong>{name.name}</strong>
          {name.name !== name.ascii ? name.ascii : ""}

          {#if name.translation}
            <em>{name.translation}</em>
          {/if}
        </span>
      {/each}
    </div>
  </u-cell>
</u-grid>
