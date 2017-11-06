import React from 'react'

import isItemActive from '../../utils/isItemActive'
import { colors, media } from '../config'
import NavSectionTitle from '../NavSectionTitle'
import ChevronSvg from '../svg/ChevronSvg'
import ContentNavLink from './ContentNavLink'

const ContentNavSection = ({
  activeItemId,
  isActive,
  isScrollSync,
  onLinkClick,
  onSectionTitleClick,
  section,
}) => (
  <div>
    <button
      css={{
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 0,
        marginTop: 10,
      }}
      onClick={onSectionTitleClick}>
      <NavSectionTitle
        cssProps={{
          [media.greaterThan('small')]: {
            color: colors.subtle,

            ':hover': {
              color: colors.text,
            },
          },
        }}>
        {section.title}
        <ChevronSvg
          cssProps={{
            marginLeft: 7,
            transform: 'rotateX(0deg)',
            transition: 'transform 0.2s ease',

            [media.lessThan('small')]: {
              display: 'none',
            },
          }}
        />
      </NavSectionTitle>
    </button>
    <ul
      css={{
        marginBottom: 10,

        [media.greaterThan('small')]: {
          display: isActive ? 'block' : 'none',
        },
      }}>
      {section.items.map(item => (
        <li
          key={item.id}
          css={{
            marginTop: 5,
          }}>
          <ContentNavLink
            isActive={isScrollSync
              ? activeItemId === item.id
              : isItemActive(location, item)
            }
            item={item}
            location={location}
            onLinkClick={onLinkClick}
            section={section}
          />
          {item.subitems && (
            <ul css={{marginLeft: 20}}>
              {item.subitems.map(subitem => (
                <li key={subitem.id}>
                  <ContentNavLink
                    isActive={isScrollSync
                      ? activeItemId === subitem.id
                      : isItemActive(location, subitem)
                    }
                    item={subitem}
                    location={location}
                    onLinkClick={onLinkClick}
                    section={section}
                  />
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
)

export default ContentNavSection
