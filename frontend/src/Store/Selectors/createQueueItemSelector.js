import { createSelector } from 'reselect';

function createQueueItemSelector() {
  return createSelector(
    (state, { episodeId }) => episodeId,
    (state) => state.queue.details.items,
    (episodeId, details) => {
      if (!episodeId) {
        return null;
      }

      return details.find((item) => {
        return item.episode.id === episodeId;
      });
    }
  );
}

export default createQueueItemSelector;
