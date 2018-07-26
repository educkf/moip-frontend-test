<template>
  <div class="invoices-add">
    <div class="wrapper">

      <nav>
        <router-link to="/invoices">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M491.318,235.318H20.682C9.26,235.318,0,244.578,0,256c0,11.423,9.26,20.682,20.682,20.682h470.636    c11.423,0,20.682-9.259,20.682-20.682C512,244.578,502.741,235.318,491.318,235.318z"></path></g><g><path d="M49.932,256L211.795,94.136c8.077-8.077,8.077-21.172,0-29.249c-8.077-8.076-21.172-8.076-29.249,0L6.058,241.375    c-8.077,8.077-8.077,21.172,0,29.249l176.488,176.488c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.625-6.058    c8.077-8.077,8.077-21.172,0-29.249L49.932,256z"></path></g></svg>
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
            <input type="text" name="value" id="value" v-mask="'money'" v-model="value" placeholder="0,00">
          </div>
          <FormError text="Esse campo é obrigatório" v-if="errors.includes('value')" />
        </label>

        <label for="email" class="form-field" :class="errors.includes('email') ? 'invalid' : null">
          <div class="label">Email</div>
          <div class="field">
            <input type="text" name="email" id="email" v-model="email"  placeholder="email@exemplo.com">
          </div>
          <FormError text="Esse campo é obrigatório" v-if="errors.includes('email')" />
        </label>

        <label for="addDescription" class="form-field">
          <div class="checkbox-field" :class="addDescription ? 'checked': null">
            <input type="checkbox" name="addDescription" id="addDescription" v-model="addDescription">
            <div class="checkbox">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="45.701px" height="45.7px" viewBox="0 0 45.701 45.7" style="enable-background:new 0 0 45.701 45.7;" xml:space="preserve"><g><path d="M20.687,38.332c-2.072,2.072-5.434,2.072-7.505,0L1.554,26.704c-2.072-2.071-2.072-5.433,0-7.504    c2.071-2.072,5.433-2.072,7.505,0l6.928,6.927c0.523,0.522,1.372,0.522,1.896,0L36.642,7.368c2.071-2.072,5.433-2.072,7.505,0    c0.995,0.995,1.554,2.345,1.554,3.752c0,1.407-0.559,2.757-1.554,3.752L20.687,38.332z"></path></g></svg>
            </div>
            <div class="label">Adicionar motivo</div>
          </div>
        </label>

        <label for="description" class="form-field" v-if="addDescription" :class="addDescription && errors.includes('description') ? 'invalid' : null">
          <div class="label">Motivo</div>
          <div class="field">
            <AutosizeTextarea :value="description" v-model="description" />
          </div>
          <FormError text="Esse campo é obrigatório" v-if="addDescription && errors.includes('description')" />
        </label>

        <button type="submit" class="btn" :class="isValid ? 'invalid' : null">Criar</button>

      </form>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import AwesomeMask from 'awesome-mask'
import FormError from '@/components/FormError'
import AutosizeTextarea from '@/components/AutosizeTextarea'

export default {
  name: "AddInvoice",
  components: {
    FormError,
    AutosizeTextarea
  },
  directives: {
    'mask': AwesomeMask
  },
  data: function() {
    return {
      value: '',
      email: '',
      addDescription: false,
      description: '',
      errors: []
    }
  },
  computed: {
    isValid() {
      return this.value == '' || this.email == '' || (this.addDescription && this.description == '')
    }
  },
  methods: {
    handleForm: function() {
      
      this.errors = []

      if (this.value == '') {
        this.errors.push('value')
      }

      if (this.email == '') {
        this.errors.push('email')
      }

      if (this.addDescription && this.description == '') {
        this.errors.push('description')
      }

      if (this.errors.length == 0) {
        const invoice = {
          value: this.value, 
          email: this.email, 
          description: this.description, 
          createDate: moment().unix()
        }
        this.$store.dispatch('addInvoice', invoice).then(() => {
          // Using promisse for when it handles API call on action
          this.$router.push({ path: '/invoices', query: { success: true }})
        })
      }
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

  @media screen and (max-width: 540px) {
    width: 100%;
  }

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
  display: block;

  @media screen and (max-width: 540px) {
    width: 100%;
  }

  &.invalid {
    .label {
      color: @errorcolor;
    }
    .field {
      border-bottom: 2px solid @errorcolor;
    }
  }

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
    input[type=text], input[type=number], input[type=email] {
      border: none;
      width: 100%;
      outline: none;
      color: #999;
      font-size: 16px;
      font-family: 'Quicksand', sans-serif;
      padding: 0 2px 3px 2px;
    }
  }

  .checkbox-field {
    position: relative;
    display: flex;

    input {
      width: 1px;
      height: 1px;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;

      &:focus ~ .checkbox {
        box-shadow: 0 0 4px @maincolor;
      }

      &:checked ~ .checkbox {
        border-color: @maincolor;

        svg {
          opacity: 1;
        }
      }
    }

    .checkbox {
      border: 2px solid #8990A6;
      border-radius: 2px;
      width: 21px;
      height: 21px;

      svg {
        fill: @maincolor;
        width: 12px;
        height: 13px;
        position: relative;
        top: -1px;
        left: 2px; 
        opacity: 0;
      }
    }

    .label {
      margin: 1px 0 0 10px;
      font-size: 16px;
      color: @fontcolor;
      font-weight: 400;
      text-transform: none;
    }

    &.checked {
      .label {
        color: @maincolor;
      }
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
  min-width: 300px;
  margin-top: 30px;
  outline: none;
  font-weight: 600;

  &.invalid {
    background: #BFC6D9;
    color: #8990A6;
  }
}

</style>
