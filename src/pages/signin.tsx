import FormSignIn from 'components/FormSignIn'
import Auth from 'templates/Auth'

export default function SignIn() {
  return (
    <Auth
      title="Bem-vindo de volta"
      redirectText="Ainda não possui uma conta ?"
      redirectLinkText="Criar conta"
      redirectLink="/signup"
      maxHeight={'50rem'}
    >
      <FormSignIn />
    </Auth>
  )
}
