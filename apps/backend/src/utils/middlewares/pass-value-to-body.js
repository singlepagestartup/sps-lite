const passValueToBody = ({ ctx, key, value, deleteKey = false }) => {
  if (value === undefined) value = null;

  if (!ctx.request.body?.data) {
    ctx.request.body.data = {};
  }

  let returnToString = false;
  if (typeof ctx.request.body.data === "string") {
    returnToString = true;

    ctx.request.body.data = JSON.parse(ctx.request.body.data);
  }

  if (deleteKey) {
    delete ctx.request.body.data[key];
  } else {
    ctx.request.body.data[key] = value;
  }

  if (returnToString) {
    ctx.request.body.data = JSON.stringify(ctx.request.body.data);
  }
};

module.exports = passValueToBody;
