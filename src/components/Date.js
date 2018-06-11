import React from 'react'

export default ({date}) => {
    const d = new Date(date);
  return (
    <time itemprop="datePublished" datetime={date} style={{marginBottom: 8}}>
      {d.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
    </time>
  )
}
