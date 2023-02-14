export const textInputProps = {
  inputClassName: `
  @pn relative
  @dy block
  @wh w-full
  @brr rounded-md
  @brw border
  @brc border-gray-300 focus:border-primary-500
  @pg px-3 py-2
  @ttc text-gray-900 placeholder-gray-500
  @zi focus:z-10
  @oe focus:outline-none focus:ring-primary-500
  @fts sm:text-sm`,
};

export const otpInputProps = {
  inputClassName: `@wh w-8 @brw border @brc border-black @ttc text-black @pg px-2 py-1 @brr rounded-md`,
  containerClassName: `@mn mx-auto`,
  labelContainerClassName: `@wh w-60 @mn mx-auto`,
};

const baseButtonClassName = `
  @gp group
  @pn relative
  @dy flex
  @jyc justify-center
  @brr rounded-md
  @brw border
  @brc border-transparent
  @pg py-2 px-4
  @fts text-sm
  @ftw font-medium
  @oe focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`;

export const indigoButtonProps = {
  className: `@wh w-full @bdc bg-primary-600 hover:bg-primary-700 @ttc text-white ${baseButtonClassName}`,
};

export const blackButtonProps = {
  className: `@bdc bg-black @ttx text-white ${baseButtonClassName}`,
};

export const redButtonProps = {
  className: `@bdc bg-red-500 @ttx text-white ${baseButtonClassName}`,
};

export const grayButtonProps = {
  className: `@bdc bg-zinc-100 @ttc text-zinc-800 ${baseButtonClassName}`,
};
