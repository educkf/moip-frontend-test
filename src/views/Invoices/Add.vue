<template>
  <div class="invoices-add">
    <div class="wrapper">
      <nav>
        <router-link to="/invoices">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M491.318,235.318H20.682C9.26,235.318,0,244.578,0,256c0,11.423,9.26,20.682,20.682,20.682h470.636    c11.423,0,20.682-9.259,20.682-20.682C512,244.578,502.741,235.318,491.318,235.318z"></path></g><g><path d="M49.932,256L211.795,94.136c8.077-8.077,8.077-21.172,0-29.249c-8.077-8.076-21.172-8.076-29.249,0L6.058,241.375    c-8.077,8.077-8.077,21.172,0,29.249l176.488,176.488c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.625-6.058    c8.077-8.077,8.077-21.172,0-29.249L49.932,256z"></path></g></svg>
          Voltar
        </router-link>
      </nav>
      <header>
        <h1>Nova cobrança</h1>
      </header>
      <form @submit.prevent="handleForm()">
        <h3>Dados da cobrança</h3>

        <label for="value" class="form-field" :class="errors.includes('value') ? 'invalid' : null">
          <div class="label">Valor</div>

          <div class="field">
            <span class="prefix">R$</span>
            <input type="text" name="value" id="value" v-mask="'money'" v-model="value">
          </div>

          <FormError text="Esse campo é obrigatório" v-if="errors.includes('value')" />
          
        </label>

        <label for="email" class="form-field" :class="errors.includes('email') ? 'invalid' : null">
          <div class="label">Email</div>

          <div class="field">
            <input type="text" name="email" id="email" v-model="email" >
          </div>
          
          <FormError text="Esse campo é obrigatório" v-if="errors.includes('email')" />
        </label>

        <label for="addDescription" class="form-field">

          <div class="field">
            <input type="checkbox" name="addDescription" id="addDescription" v-model="addDescription">
            <div class="checkbox">
              <div class="checked"></div>
            </div>
          </div>
          
          <div class="label">Adicionar motivo</div>
        </label>

        <label for="description" class="form-field" :class="addDescription && errors.includes('description') ? 'invalid' : null">
          <div class="label">Motivo</div>

          <div class="field">
            <input type="text" name="description" id="description" v-model="description">
          </div>
          
          <FormError text="Esse campo é obrigatório" v-if="addDescription && errors.includes('description')" />
        </label>

        <input type="submit" class="btn" value="Criar">

      </form>
    </div>
  </div>
</template>

<script>
import AwesomeMask from 'awesome-mask'
import FormError from '@/components/FormError'

export default {
  name: "AddInvoice",
  components: {
    FormError
  },
  directives: {
    'mask': AwesomeMask
  },
  data: function() {
    return {
      value: '10000',
      email: 'eduardo.ckf@gmail.com',
      addDescrition: false,
      description: 'lorem ipsum amet simbilorum',
      errors: ['email']
    }
  }
};
</script>

<style lang="less" scoped>

@import '../../assets/variables.less';

header {
  h1 {
    .heading();
  }
}

form {
  width: 90%;
  max-width: 600px;
  margin-top: 30px;

  h3 {
    font-size: 14px;
    color: @maincolor;
    border-bottom: 1px solid @maincolor;
    text-transform: uppercase;
    padding-bottom: 5px;
  }
}

.form-field {
  width: 85%;
  margin-top: 25px;
  overflow: auto;
  display: block;

  .label {
    font-size: 13px;
    font-weight: 700;
    color: @fontcolor;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .field {
    border-bottom: 1px solid #999;
    display: flex;

    .prefix {
      font-size: 16px;
      padding-right: 5px;
      color: #999;
    }
    input[type=text], input[type=number], input[type=email], textarea {
      border: none;
      width: 100%;
      outline: none;
      color: #999;
      font-size: 16px;
      font-family: 'Quicksand', sans-serif;
      padding: 0 2px 3px 2px;
    }
  }
}

nav {
  margin: 24px 0;

  a {
    font-size: 15px;
    color: @maincolor;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;

    svg {
      height: 15px;
      margin-right: 5px;
      fill: @maincolor;
      position: relative;
      top: 2px;
    }
  }
}

.btn {
  .button();
}

</style>
