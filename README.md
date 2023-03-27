## Description

Jobs are created by Firebase [functions](https://firebase.google.com/docs/functions/get-started).

## Instruction
I created this project base on [this tutorial](https://firebase.google.com/docs/functions/schedule-functions).

## Installation
You need to create [Firebase CLI](https://firebase.google.com/docs/cli?authuser=0#setup_update_cli) in the first, then install npm

```bash
$ cd functions

$ npm install
```

Or you can start a new firebase function

```
$ firebase init functions
```
The CLI gives you two options for language support:
- JavaScript
- TypeScript See [Write Functions with TypeScript](https://firebase.google.com/docs/functions/typescript) for more information.

## Running the app in local. 
The local Firebase emulators don't currently support pubsub. You need to uses [Cloud Scheduler](https://cloud.google.com/scheduler/) to trigger events on that topic, ensuring that your function runs on the desired schedule. So for the moment, you can test your function by:

```bash
# Go to shell
$ npm run shell

# then start function name 
$ scheduledFunction();

# firebase > scheduledFunction();
# 'Successfully invoked function.'
# firebase > >  {
# >    eventId: '7612e344-4188-4473-a12e-d51ae7779b61',
# >    timestamp: '2023-03-27T07:08:40.033Z',
# >    eventType: 'pubsub',
# >    params: {}
# >  }  context
# >  This will be run every 10 seconds!
```

## Test

```bash
# coding convention
$ npm run lint

# fix eslint
$ npm run lint:fix
```

## Pricing firebase
https://firebase.google.com/pricing#blaze-calculator

## Stay in touch

- Author - [Richard Do](https://github.com/ptit9x)

## License

Nest is [MIT licensed](LICENSE).
