"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var crypto_1 = __importDefault(require("crypto"));
var multer_sharp_s3_1 = __importDefault(require("multer-sharp-s3"));
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var path_1 = __importDefault(require("path"));
var comprasController_1 = __importDefault(require("../controllers/comprasController"));
var awsConfigPath = path_1.default.resolve(__dirname + "/../" + "aws.json"); //eslint-disable-line
aws_sdk_1.default.config.loadFromPath(awsConfigPath);
var endpoint = new aws_sdk_1.default.Endpoint("s3.us-west-000.backblazeb2.com");
var s3 = new aws_sdk_1.default.S3({ endpoint: endpoint });
var storage = multer_sharp_s3_1.default({
    s3: s3,
    Bucket: "plugGanesa",
    Key: function (req, file, cb) {
        crypto_1.default.randomBytes(16, function (err, raw) {
            var fileName = raw.toString("hex") + "-" + file.originalname;
            cb(err, err ? undefined : fileName);
        });
    },
});
var upload = multer_1.default({ storage: storage });
var comprasRouter = express_1.Router();
var comprasController = new comprasController_1.default();
comprasRouter.get("/", comprasController.getAllCompras);
comprasRouter.post("/", comprasController.createCompra);
comprasRouter.post("/uploads", upload.array("img"), comprasController.uploadImage);
comprasRouter.get("/:id", comprasController.getOne);
comprasRouter.put("/:id", comprasController.updateOneCotacao);
comprasRouter.put("/status/:id", comprasController.changeStatus);
exports.default = comprasRouter;
