// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PromiseHandler = (promise: Promise<any>): { promise: Promise<any>, cancel: () => void } => {
  let hasCanceled = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val => hasCanceled ? reject({ isCanceled: true }) : resolve(val),
      error => hasCanceled ? reject({ isCanceled: true }) : reject(error)
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true;
    },
  };
};
