import PropTypes from 'prop-types';
import { memo } from 'react';
import contentType from '../../../utils/content-types';
import tagList from '../../../utils/tags';
import contentList from '../../../utils/content-lists';

function Radios({ data, setData, type }) {
  return (
    <>
      {/* Content Type */}
      <fieldset className="col-span-full my-3">
        <div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-gray-300">Content Type</h3>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4 w-full md:grid-cols-3">
          {contentType.map(type => {
            return (
              <div
key={type}
className="flex items-center"
              >
                <input
                  id={type}
                  name="content-type"
                  type="radio"
                  required
                  value={type}
                  checked={data.ContentType === type}
                  onChange={e => setData({ ...data, ContentType: e.target.value })}
                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label
                  htmlFor={type}
                  className="block ml-3 text-sm font-medium text-gray-700 capitalize dark:text-gray-300"
                >
                  {type}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>

      {/* Badge */}
      {type === 'edit' && (
        <>
          <fieldset className="col-span-3 my-3">
            <div>
              <legend className="text-base font-medium text-gray-900 dark:text-gray-300">
                Badge
              </legend>
            </div>
            <div className="mt-4 space-y-4">
              {tagList.badge.map(tag => {
                return (
                  <div
key={tag}
className="flex items-center"
                  >
                    <input
                      id={tag}
                      name="badge"
                      type="radio"
                      value={tag}
                      checked={data.SpecialTag === tag}
                      onClick={e => {
                        if (data.SpecialTag === tag) {
                          setData({ ...data, SpecialTag: '' });
                        } else {
                          setData({ ...data, SpecialTag: e.target.value });
                        }
                      }}
                      onChange={() => {}}
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={tag}
                      className="block ml-3 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </label>
                  </div>
                );
              })}
            </div>
          </fieldset>

          {/* Lists */}
          <fieldset className="col-span-3 my-3">
            <div>
              <legend className="text-base font-medium text-gray-900 dark:text-gray-300">
                Lists
              </legend>
            </div>
            <div className="mt-4 space-y-4">
              {contentList.map(tag => {
                return (
                  <div
key={tag}
className="flex items-center"
                  >
                    <input
                      id={tag}
                      name="lists"
                      type="radio"
                      value={tag}
                      checked={data.Lists === tag}
                      onClick={e => {
                        if (data.Lists === tag) {
                          setData({ ...data, Lists: '' });
                        } else {
                          setData({ ...data, Lists: e.target.value });
                        }
                      }}
                      onChange={() => {}}
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={tag}
                      className="block ml-3 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {tag === 'started' && 'Getting Started'}
                    </label>
                  </div>
                );
              })}
            </div>
          </fieldset>
        </>
      )}
    </>
  );
}

Radios.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['submit', 'edit'])
};

export default memo(Radios);
