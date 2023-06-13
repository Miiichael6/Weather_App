
type ErrorMessageProps = {
  message: string
}

const ErrorMessage = ({message}: ErrorMessageProps) => {
  return (
    <div>
        <p className="font-medium text-white text-center">
          {message}
        </p>
      </div>
  )
}

export default ErrorMessage