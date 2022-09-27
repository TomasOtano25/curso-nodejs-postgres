const { ValidationError } = require('sequelize');

// Creamos function que nos hara llegar a un middleware de tipo error:
// Middleware de tipo error
function logErrors(error, req, res, next) {
  console.error(error);

  next(error);
  // enviar los errores al tracking
}

function errorHandler(error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    const { output } = error;

    res.status(output.statusCode).json(output.payload);
  }

  next(error);
}

function ormErrorHandler(error, req, res, next) {
  if (error instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: error.name,
      errors: error.errors,
    });
  }
  next(error);
}

module.exports = { logErrors, boomErrorHandler, errorHandler, ormErrorHandler };
