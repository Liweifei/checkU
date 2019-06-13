<template>
	<div class="appFooter">
        <div class="main">
            <p class="content">© 2019 Copyright studyabroad.top<br/>All Rights Reserved.</p>
        </div>
    </div>
</template>

<script type="text/javascript">
	export default{
		name: 'appFooter',
		data(){
			return{
				logo:require("img/logo.png"),
				headprotrait:require("img/headProtrait.png"),
			}
		}
	}

</script>
<style lang="scss">
    @import './appFooter.scss';
</style>