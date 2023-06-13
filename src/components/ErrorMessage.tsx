import {motion} from "framer-motion";

type ErrorMessageProps = {
  message: string
}

const ErrorMessage = ({message}: ErrorMessageProps) => {
  return (
    <motion.div className="absolute left-0 top-0 flex justify-center items-center w-full h-full p-10">
        <p className="font-medium text-white text-center">
          {message}
        </p>
      </motion.div>
  )
}

export default ErrorMessage