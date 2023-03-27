import * as functions from "firebase-functions";
import {CronExpression} from "./common/app";

exports.scheduledFunction = functions.pubsub
  .schedule(CronExpression.EVERY_10_SECONDS)
  .onRun((context) => {
    console.log(context, " context");
    console.log("This will be run every 10 seconds!");
    return null;
  });
