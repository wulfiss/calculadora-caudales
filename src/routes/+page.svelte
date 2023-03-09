<script lang='ts'>
    import Tab, { Label } from '@smui/tab';
    import TabBar from '@smui/tab-bar';
    import Fast from './Components/Fast.svelte';
    import Full from './Components/Full.svelte';

    let tabs=[
    {id:0, a: 'Fast', name: 'Calculadora Rápida'},
    {id:1, a: 'Full', name: 'Calculadora'},
    ];

    const actions =  [Fast, Full];

    let action = actions[0];
    let active = tabs[0];

    function handleActionClicked(id:number):any {
        action = actions[id];
    }
</script>

<TabBar {tabs} let:tab bind:active>
    <Tab {tab} on:click={handleActionClicked(tab.id)}>
      <Label>{tab.name}</Label>
    </Tab>
  </TabBar>


  <svelte:component this={action}></svelte:component>
