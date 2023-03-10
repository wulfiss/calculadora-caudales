<script lang='ts'>
    import Textfield from '@smui/textfield';
    import Button, { Label } from '@smui/button';
    import Select, { Option } from '@smui/select';
    
    import { caudalimetros } from '../../lib/store';
    /* import Calculator from './Calculator.svelte';
 */
    let initialTime = '04:20';
    let finalTime = '06:24';
    let velNoria:number = 4500;
    let initialMeasure:number = 10000;
    let finalMeasure:number = 12069;
    let caudalID:string = 'C000';

</script>
<div id='main'>
    <div id='time'>
        <Textfield bind:value={initialTime} label="Hora Inicial" type="time" style="width: 121px;"/>
        <Textfield bind:value={finalTime} label="Hora Final" type="time" style="width: 121px;"/>
    </div>
    <div>      
        <Textfield bind:value={velNoria} label='Vel. de Noria (aves/hora)' type='number' variant='outlined' style="width: 254px;"/>
    </div>
    <div>      
        <Textfield bind:value={initialMeasure} label='Primera Medición Caudal (Litros)' type='number' variant='outlined' style="width: 254px;"/>
    </div>
    <div>      
        <Textfield bind:value={finalMeasure} label='Segunda Medición Caudal (Litros)' type='number' variant='outlined' style="width: 254px;"/>
    </div>
    <div>
        <Select variant='outlined' label="Caudalimetros" id="caudalimetroSelect" bind:value={caudalID} style="width: 254px;">
            {#each $caudalimetros as caudal}
                <Option value={caudal.id} disabled={caudal.disable}>{caudal.name}</Option>
            {/each}
        </Select>
    </div> 
    <div>
        <!-- <Calculator {initialTime} {finalTime} {velNoria} {initialMeasure} {finalMeasure} {caudalID}/> -->
        <Button>
            <Label>Calculator</Label>    
        </Button>
    </div>

</div>

<style lang="scss">
    div#main{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-top: 30px;
        gap: 20px;
    }
    div#time{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
</style>