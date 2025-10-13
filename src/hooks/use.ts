type UsePromise<T> = {
  data?: T;
  status?: "pending" | "rejected" | "resolved";
  reason?: string;
} & Promise<unknown>;

export function use<T>(promise: Promise<unknown>): T {
  const usePromise: UsePromise<T> = promise;

  // prettier-ignore
  if (usePromise.status === "pending") 
    throw usePromise; // This will trigger a <Suspense /> Boundary

  // prettier-ignore
  if (usePromise.status === "rejected") 
    throw usePromise.reason; // This will trigger a <ErrorBoundary /> Boundary

  // prettier-ignore
  if (usePromise.status === "resolved")
    return usePromise.data!; // This Wouldn't Be Returned until it's Resolved

  usePromise.status = "pending";

  usePromise.then(
    (value) => {
      usePromise.status = "resolved";
      usePromise.data = value as T;
    },
    (error) => {
      usePromise.status = "rejected";
      usePromise.reason = error;
    }
  );

  throw usePromise;
}
