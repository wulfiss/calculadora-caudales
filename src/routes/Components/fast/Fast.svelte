<script lang='ts'>
    import Textfield from '@smui/textfield';
    import Select, { Option } from '@smui/select';
    import { caudalimetros } from '../../../lib/store';

    import FastOperation from './FastOperation.svelte';

    let currentC: number = 800;
    let currentUnit: string = 'litro';
    let velNoria: number = 4000;
    let caudalID: string ='C001';

</script>

<div id='main'>
    <div>
        <Textfield bind:value={currentC} label='Caudal Actual' type='number' variant='outlined' style="width: 150px;"/>
            <Select variant='outlined' label="Unidad" id="unit" bind:value={currentUnit} style="width: 100px;">
                <Option value="litro">l/h</Option>
                <Option value="metro">m³/h</Option>
            </Select>
    </div>
    <div>      
        <Textfield bind:value={velNoria} label='Vel. de Noria(aves/hora)' type='number' variant='outlined' style="width: 254px;"/>
    </div>
    <div>
            <Select variant='outlined' label="Caudalimetros" id="caudalimetroSelect" bind:value={caudalID} style="width: 254px;">
                {#each $caudalimetros as caudal}
                    <Option value={caudal.id} disabled={caudal.disable}>{caudal.name}</Option>
                {/each}
            </Select>
    </div> 
    <div>
        <FastOperation currentCaudal={currentC} noriaVel={velNoria} caudalID={caudalID} currentUnit={currentUnit} />
    </div>
</div>

<style lang='scss'>
        *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    div#main{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 30px;
        margin-top: 60px;
    }
</style>