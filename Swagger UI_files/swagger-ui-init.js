
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "info": {
      "title": "Close Api",
      "version": "1.0.0",
      "description": "Close Api Documentation",
      "servers": [
        "http://localhost:5000"
      ]
    },
    "swagger": "2.0",
    "paths": {
      "/api/login": {
        "post": {
          "description": "Login a user",
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Login info of user",
              "required": true,
              "schema": {
                "type": "object",
                "properties": {
                  "phone": {
                    "type": "string"
                  },
                  "otp": {
                    "type": "number"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Login Response",
              "schema": {
                "type": "object",
                "properties": {
                  "message": {
                    "type": "string"
                  },
                  "done": {
                    "type": "boolean"
                  },
                  "user": {
                    "$ref": "#/definitions/User"
                  }
                }
              }
            }
          }
        }
      },
      "/api/login-otp": {
        "post": {
          "description": "Get otp for login",
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Login info of user",
              "required": true,
              "schema": {
                "type": "object",
                "properties": {
                  "phone": {
                    "type": "string"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Login Response",
              "schema": {
                "type": "object",
                "properties": {
                  "message": {
                    "type": "string"
                  },
                  "done": {
                    "type": "boolean"
                  }
                }
              }
            }
          }
        }
      },
      "/api/signup": {
        "post": {
          "description": "Get otp for login",
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Signup info of user",
              "required": true,
              "schema": {
                "type": "object",
                "properties": {
                  "phone": {
                    "type": "string"
                  },
                  "otp": {
                    "type": "string"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Signup Response",
              "schema": {
                "type": "object",
                "properties": {
                  "message": {
                    "type": "string"
                  },
                  "done": {
                    "type": "boolean"
                  },
                  "user": {
                    "$ref": "#/definitions/User"
                  }
                }
              }
            }
          }
        }
      },
      "/api/signup-otp": {
        "post": {
          "description": "Get otp for Signup",
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Signup info of user",
              "required": true,
              "schema": {
                "type": "object",
                "properties": {
                  "phone": {
                    "type": "string"
                  },
                  "email": {
                    "type": "string"
                  },
                  "address": {
                    "type": "string"
                  },
                  "firstname": {
                    "type": "string"
                  },
                  "lastname": {
                    "type": "string"
                  },
                  "cardNumber": {
                    "type": "number"
                  },
                  "exp": {
                    "type": "string"
                  },
                  "cvv": {
                    "type": "number"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Requested otp",
              "schema": {
                "type": "object",
                "properties": {
                  "message": {
                    "type": "string"
                  },
                  "done": {
                    "type": "boolean"
                  }
                }
              }
            }
          }
        }
      },
      "/api/logout": {
        "post": {
          "description": "Logout a user",
          "responses": {
            "200": {
              "description": "Logout response",
              "schema": {
                "type": "object",
                "properties": {
                  "message": {
                    "type": "string"
                  },
                  "done": {
                    "type": "boolean"
                  }
                }
              }
            }
          }
        }
      },
      "/api/transaction": {
        "post": {
          "description": "Create a transaction",
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Transaction Object",
              "required": true,
              "schema": {
                "type": "object",
                "properties": {
                  "phone": {
                    "type": "string"
                  },
                  "price": {
                    "type": "number"
                  },
                  "redirectUrl": {
                    "type": "string"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Transaction Registered",
              "schema": {
                "type": "object",
                "properties": {
                  "message": {
                    "type": "string"
                  },
                  "done": {
                    "type": "boolean"
                  },
                  "transactionId": {
                    "type": "integer",
                    "format": "int64"
                  }
                }
              }
            }
          }
        }
      },
      "/api/transaction/{transactionId}": {
        "get": {
          "description": "Get a transaction with transaction id",
          "parameters": [
            {
              "name": "transactionId",
              "description": "Id of transaction",
              "required": true,
              "type": "integer",
              "format": "int64"
            }
          ],
          "responses": {
            "200": {
              "description": "Transaction Found",
              "schema": {
                "type": "object",
                "properties": {
                  "transaction": {
                    "$ref": "#/definitions/Transaction"
                  },
                  "message": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "/api/checkout": {
        "post": {
          "description": "Generate order id",
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "payment details",
              "required": true,
              "schema": {
                "type": "object",
                "properties": {
                  "amount": {
                    "type": "integer"
                  },
                  "currency": {
                    "type": "string"
                  },
                  "receipt": {
                    "type": "integer",
                    "format": "int64"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Order Id Created",
              "schema": {
                "type": "object",
                "properties": {
                  "orderId": {
                    "type": "object"
                  },
                  "message": {
                    "type": "string"
                  },
                  "clientId": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "/api/verify": {
        "get": {
          "description": "Check if user is logged in or not",
          "responses": {
            "200": {
              "description": "Is User Is Loggedin Or Not",
              "schema": {
                "type": "object",
                "properties": {
                  "message": {
                    "type": "string"
                  },
                  "done": {
                    "type": "boolean"
                  }
                }
              }
            }
          }
        }
      }
    },
    "definitions": {
      "Transaction": {
        "properties": {
          "phone": {
            "type": "string"
          },
          "price": {
            "type": "number"
          },
          "redirectUrl": {
            "type": "string"
          },
          "Completed": {
            "type": "boolean"
          }
        }
      },
      "Payment": {
        "properties": {
          "razorpay_order_id": {
            "type": "string"
          },
          "razorpay_payment_id": {
            "type": "number"
          },
          "razorpay_signature": {
            "type": "string"
          },
          "transactionId": {
            "type": "integer",
            "format": "int64"
          }
        }
      },
      "Otp": {
        "properties": {
          "phone": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "address": {
            "type": "string"
          },
          "secret": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "cardNumber": {
            "type": "number"
          },
          "exp": {
            "type": "string"
          },
          "cvv": {
            "type": "number"
          }
        }
      },
      "User": {
        "properties": {
          "phone": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "address": {
            "type": "string"
          },
          "secret": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "cardNumber": {
            "type": "number"
          },
          "exp": {
            "type": "string"
          },
          "cvv": {
            "type": "number"
          }
        }
      }
    },
    "responses": {},
    "parameters": {},
    "securityDefinitions": {},
    "tags": []
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
